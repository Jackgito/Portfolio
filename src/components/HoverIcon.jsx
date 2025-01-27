import React, { useState } from 'react';
import styles from './HoverIcon.module.css';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";

const HoverIcon = ({ icon, size, link, tooltip, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.iconContainer} ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      title={tooltip}
    >
      {icon === "github" && (
        <AiFillGithub
          className={`${styles.hoverIcon} ${isHovered ? styles.hovered : ''}`}
          size={size}
        />
      )}
      {icon === "linkedin" && (
        <FaLinkedin
          className={`${styles.hoverIcon} ${isHovered ? styles.hovered : ''}`}
          size={size}
        />
      )}
      {icon === "play" && (
        <IoPlayCircleOutline
          className={`${styles.hoverIcon} ${isHovered ? styles.hovered : ''}`}
          size={size}
        />
      )}
    </div>
  );
};

export default HoverIcon;