import { useEffect, useState } from "react";

import jarvisLogo from "../assets/jarvis.png";

function Jarvis({ message }) {

  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {

    setSpeaking(true);

    const timer = setTimeout(() => {

      setSpeaking(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, [message]);

  return (

    <div
      style={{
        position: "fixed",
        top: "120px",
        right: "60px",
        zIndex: 9999
      }}
    >

      {/* VISUALIZER RINGS */}

      {speaking && (

        <>
        
          <div
            style={{
              position: "absolute",
              width: "160px",
              height: "160px",
              border: "2px solid cyan",
              borderRadius: "50%",
              animation: "pulse 1s infinite",
              left: "-20px",
              top: "-20px"
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              border: "2px solid #67e8f9",
              borderRadius: "50%",
              animation: "pulse 1.5s infinite",
              left: "-40px",
              top: "-40px"
            }}
          />

        </>

      )}

      {/* MAIN JARVIS */}

      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid cyan",
          boxShadow: "0 0 40px cyan"
        }}
      >

        <img
          src={jarvisLogo}
          alt="Jarvis"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

      </div>

      {/* MESSAGE */}

      <div
        style={{
          marginTop: "15px",
          background: "rgba(0,0,0,0.7)",
          border: "1px solid cyan",
          padding: "12px",
          borderRadius: "12px",
          width: "260px",
          color: "#67e8f9",
          boxShadow: "0 0 20px cyan"
        }}
      >

        {message}

      </div>

      <style>

        {`

          @keyframes pulse {

            0% {
              transform: scale(1);
              opacity: 1;
            }

            100% {
              transform: scale(1.3);
              opacity: 0;
            }

          }

        `}

      </style>

    </div>

  );

}

export default Jarvis;