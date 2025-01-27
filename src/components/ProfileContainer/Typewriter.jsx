import React, { useEffect, useRef } from "react";

const Typewriter = ({ message, speed, delay, className }) => {
  const textPosition = useRef(0);
  const currentMessageIndex = useRef(0);

  const messageRef = useRef(null);

  const typewriter = () => {
    const currentMessage = message[currentMessageIndex.current];

    if (currentMessage) {
      // Update displayed text character by character
      messageRef.current.textContent += currentMessage[textPosition.current];
      textPosition.current++;

      if (textPosition.current >= currentMessage.length) {
        // Add a pause after the whole message
        setTimeout(() => {
          textPosition.current = 0;
          currentMessageIndex.current++;
          typewriter();
        }, speed);
      } else {
        setTimeout(typewriter, speed);
      }
    }
  };

  useEffect(() => {
    // Initial delay before starting the typing animation
    const timeout = setTimeout(typewriter, delay);

    // Cleanup on unmount
    return () => clearTimeout(timeout);
  }, [message, speed, delay]); // Re-run on message, speed or delay change

  return (
    <span ref={messageRef} className={className}></span>
  );
};

export default Typewriter;
