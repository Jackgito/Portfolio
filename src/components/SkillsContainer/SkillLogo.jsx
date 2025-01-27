import React, { useState } from 'react';
import styles from './SkillLogo.module.css';

const SkillLogo = ({ src, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.imgHoverZoom} ${isHovered ? styles.hover : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt="Skill Logo" title={tooltip} />
    </div>
  );
};

export default SkillLogo;
