const fetchData = async () => 
{
    try {
        // Municipality
        const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";
        const municipalityResponse = await fetch(url);
        const municipalityData = await municipalityResponse.json();
        
        // Migration
        const positiveMigrationURL = "https://statfin.stat.fi/PxWeb/sq/4bb2c735-1dc3-4c5e-bde7-2165df85e65f";
        const negativeMigrationURL = "https://statfin.stat.fi/PxWeb/sq/944493ca-ea4d-4fd9-a75c-4975192f7b6e";
        const [positiveResponse, negativeResponse] = await Promise.all([
            fetch(positiveMigrationURL),
            fetch(negativeMigrationURL)
        ]);

        if (!positiveResponse.ok || !negativeResponse.ok) {
            throw new Error("Failed to fetch migration data");
        }

        const [positiveData, negativeData] = await Promise.all([
            positiveResponse.json(),
            negativeResponse.json()
        ]);

        console.log(municipalityData)
        console.log(positiveData)
        //console.log(negativeData)
        //console.log(Object.keys(positiveData.dataset.dimension.Tuloalue.category.index));


        // Combine data to key-value pairs
        // Sample data for demonstration

        // Create an empty dataDictionary object
        let municipalityCodes = Object.keys(positiveData.dataset.dimension.Tuloalue.category.index);
        let positiveDataValues = positiveData.dataset.value;
        let negativeDataValues = negativeData.dataset.value;
        
        const dataDictionary = {};
        
        // Iterate through the arrays and populate the dataDictionary object
        for (let i = 0; i < municipalityCodes.length; i++) {
            if (i == 0) {
                // Skip the first iteration
                continue;
            }
        
            const municipalityCode = municipalityCodes[i].replace(/[KU]/g, ''); // Remove "K" and "U"
            const positiveMigration = positiveDataValues[i];
            const negativeMigration = negativeDataValues[i];
        
            dataDictionary[municipalityCode] = {
                municipalityCode,
                positiveMigration,
                negativeMigration,
            };
        }

        initMap(municipalityData, negativeData, positiveData, dataDictionary);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const initMap = (municipalityData, negativeData, positiveData, dataDictionary) => 
{
    let map = L.map("map", {
        minZoom: -3
    });

    let geoJson = L.geoJson(municipalityData, {
        style: function (feature) {
            // Find the corresponding migration data for this municipality
            //console.log(feature)
            console.log(feature)
            let municipalityId = feature.properties.kunta
            let positiveMigration = dataDictionary[String(municipalityId)].positiveMigration;
            let negativeMigration = dataDictionary[String(municipalityId)].negativeMigration;

            // Calculate hue based on net migration (positive - negative)
            let hue = (positiveMigration / negativeMigration)**3 * 60;

            // Ensure that hue does not exceed 120
            if (hue > 120) {
                hue = 120;
            }

            // Generate the HSL color
            const color = `hsl(${hue}, 75%, 50%)`;

            return {
                fillColor: color,
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7
            };
        },
        onEachFeature: function (feature, layer) 
        {
            console.log(feature)
            // Check if the feature has a 'name' property
            layer.bindTooltip(feature.properties.name, {
                sticky: true // Keep the tooltip open when hovering
            });

            // Create a popup with positive and negative migration data
            let municipalityId = feature.properties.kunta
            let positiveMigration = dataDictionary[String(municipalityId)].positiveMigration;
            let negativeMigration = dataDictionary[String(municipalityId)].negativeMigration;
            
            const popupContent = `
                <strong>Municipality:</strong> ${feature.properties.name}<br>
                <strong>Positive Migration:</strong> ${positiveMigration ? positiveMigration : 'N/A'}<br>
                <strong>Negative Migration:</strong> ${negativeMigration ? negativeMigration : 'N/A'}<br>
            `;

            // Display the popup on the map
            layer.bindPopup(popupContent).openPopup();
        }
    }).addTo(map);

    let osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
    }).addTo(map);

    map.fitBounds(geoJson.getBounds());
}

fetchData();
  