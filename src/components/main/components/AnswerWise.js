import React, { useState, useEffect } from "react";
import Preview from "./Preview";

// Images import
import chatBot from "../images/chat-bot.png"
import chatBotHover from "../images/chat-bot.gif";

import steveBG from "../images/steve.jpg";
import doctorBG from "../images/doctor.jpeg";
import scientiStBG from "../images/scientist.jpeg";
import pilotBG from "../images/pilot.jpeg"
import humanoidBG from "../images/humanoid.jpeg"
import cyberroboBG from "../images/cyberrobo.jpeg";
import cyberpunkBG from "../images/cyberpunk.png";
import lawyerBG from "../images/lawyer-ai.png";

//Mobile Images import
import steveMobileBG from "../images/steve-mobile.png";
import doctorMobileBG from "../images/doctor-mobileBG.jpeg";
import scientiStMobileBG from "../images/scientist-mobileBG.jpeg";
import pilotMobileBG from "../images/pilot-mobileBG.jpeg"
import humanoidMobileBG from "../images/humanoid-mobiLeBG.jpeg"
import cyberroboMobileBG from "../images/cyberrobo-mobileBG.jpeg";
import cyberpunkMobileBG from "../images/cyberpunk-mobileBG.png";
import lawyerMobileBG from "../images/lawyerMobileBg.png"

const AnswerWise = ({ apiKey, color = "#8b5cf6", questions, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseContainer = () => {
    setIsOpen(false);
  };

  let backgroundImageStyle;
  let backgroundImageMobile;
  let backgroundColour;
  let iconColor = "white";
  if (theme === "dark2") {
    backgroundImageStyle = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 0%, rgb(22, 255, 255), transparent 40%),
    radial-gradient(at 94% 88%, rgb(238, 9, 70) 0px, transparent 60%)`;
    backgroundImageMobile = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 0%, rgb(22, 255, 255), transparent 40%),
    radial-gradient(at 94% 88%, rgb(238, 9, 70) 0px, transparent 60%)`;
    backgroundColour = "#161616"
  } else if (theme === "dark1") {
    backgroundImageStyle = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 9%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 94% 88%, hsla(256, 96%, 77%, 1) 0px, transparent 60%)`;
    backgroundImageMobile = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 9%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 94% 88%, hsla(256, 96%, 77%, 1) 0px, transparent 60%)`;
    backgroundColour = "black"

  } else if (theme === "steve-ai") {
    backgroundImageStyle = `url(${steveBG})`;
    backgroundImageMobile = `url(${steveMobileBG})`;
    backgroundColour = "white"
  } else if (theme === "doctor-ai") {
    backgroundImageStyle = `url(${doctorBG})`;
    backgroundImageMobile = `url(${doctorMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === "humanoid-ai") {
    backgroundImageStyle = `url(${humanoidBG})`;
    backgroundImageMobile = `url(${humanoidMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === "cyberpunk-ai") {
    backgroundImageStyle = `url(${cyberpunkBG})`;
    backgroundImageMobile = `url(${cyberpunkMobileBG})`;
    backgroundColour = "#161616"

  }  else if (theme === "lawyer-ai") {
    backgroundImageStyle = `url(${lawyerBG})`;
    backgroundImageMobile = `url(${lawyerMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === "scientist-ai") {
    backgroundImageStyle = `url(${scientiStBG})`;
    backgroundImageMobile = `url(${scientiStMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === "pilot-ai") {
    backgroundImageStyle = `url(${pilotBG})`;
    backgroundImageMobile = `url(${pilotMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === "cyberrobo-ai") {
    backgroundImageStyle = `url(${cyberroboBG})`;
    backgroundImageMobile = `url(${cyberroboMobileBG})`;
    backgroundColour = "#161616"

  } else if (theme === 'default') {
    backgroundImageStyle = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 9%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 94% 88%, hsla(256, 96%, 77%, 1) 0px, transparent 60%)`;
    backgroundImageMobile = `radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ), 
    radial-gradient(at  0% 9%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 94% 88%, hsla(256, 96%, 77%, 1) 0px, transparent 60%)`;
    backgroundColour = "white";
    iconColor = "black";

  } 

  useEffect(() => {
    // Function to check if the screen is in mobile view
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    // Call the function on initial render
    checkMobileView();
    // Add event listener to check on window resize
    window.addEventListener('resize', checkMobileView);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  const commonStyles = {
    width: "48rem",
    borderRadius: "0.75rem",
    padding: "1rem",
    zIndex: 50,
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.4)'
  };

  const desktopStyles = {
    ...commonStyles,
    background: backgroundImageStyle,
    backgroundColor: backgroundColour,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  };

  const mobileStyles = {
    ...commonStyles,
    width: '24rem', 
    background: backgroundImageMobile,
    backgroundColor: backgroundColour,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'h-[100%]',
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        zIndex: 50,
      }}
    >
      <button
        style={{
          width: "6rem",
          height: "6rem",
          borderRadius: "50%",
          boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",
          borderWidth: "0px",
          backgroundColor: 'white'
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={toggleModal}
      >
        <img
          src={isHovered ? chatBotHover : chatBot}
          className={isHovered ? "h-[24] w-[24] p-1 rounded-full" : "p-4"}
          alt="chatbot"
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
            margin: 0,          
          }}
        >
          <div  style={isMobile ? mobileStyles : desktopStyles}>
            <Preview
              apiKey={apiKey}
              theme={theme}
              color={color}
              questions={questions}
              handleCloseContainer={handleCloseContainer} 
              iconColor={iconColor}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerWise;
