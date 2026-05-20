import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const BootSequence = ({ onComplete }) => {

  const containerRef = useRef(null);

  const [logs, setLogs] = useState([]);

  const bootLogs = [

    "INITIALIZING ARC REACTOR...",
    "LOADING NEURAL NETWORKS...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESSING JARVIS AI SYSTEM...",
    "SCANNING GITHUB DATABASE...",
    "WELCOME BACK SIR"

  ];

  useEffect(() => {

    let currentLog = 0;

    const interval = setInterval(() => {

      if (currentLog < bootLogs.length) {

        setLogs(prev => [

          ...prev,
          bootLogs[currentLog]

        ]);

        currentLog++;

      } else {

        clearInterval(interval);

        setTimeout(() => {

          gsap.to(containerRef.current, {

            opacity: 0,
            duration: 1.5,

            onComplete: () => {

              onComplete();

            }

          });

        }, 1200);

      }

    }, 700);

    return () => clearInterval(interval);

  }, [onComplete]);

  return (

    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "cyan",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace"
      }}
    >

      {/* ARC REACTOR */}

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          border: "5px solid cyan",
          borderRadius: "50%",
          boxShadow: "0 0 120px cyan",
          animation: "pulse 2s infinite",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <div
          style={{
            width: "120px",
            height: "120px",
            border: "3px solid white",
            borderRadius: "50%",
            animation: "spin 5s linear infinite"
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            background: "cyan",
            borderRadius: "50%",
            boxShadow: "0 0 80px cyan"
          }}
        />

      </div>

      {/* LOGS */}

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: "80px",
          width: "600px"
        }}
      >

        {logs.map((log, index) => (

          <div
            key={index}
            style={{
              marginBottom: "12px",
              fontSize: "24px",
              letterSpacing: "3px"
            }}
          >

            {">"} {log}

          </div>

        ))}

      </div>

      {/* CSS */}

      <style>

        {`

          @keyframes spin {

            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }

          }

          @keyframes pulse {

            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.05);
            }

            100% {
              transform: scale(1);
            }

          }

        `}

      </style>

    </div>

  );

};

export default BootSequence;