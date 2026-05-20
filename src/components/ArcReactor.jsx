import { useEffect, useState } from "react";

function ArcReactor() {

  const [active, setActive] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setActive(true);

    }, 500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 9999
      }}
    >

      <div
        style={{
          width: active ? "180px" : "0px",
          height: active ? "180px" : "0px",
          border: "4px solid cyan",
          borderRadius: "50%",
          transition: "all 1s ease",
          boxShadow: "0 0 60px cyan",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: "rgba(0,0,0,0.5)"
        }}
      >

        {/* OUTER RING */}

        <div
          style={{
            position: "absolute",
            width: "140px",
            height: "140px",
            border: "2px solid #67e8f9",
            borderRadius: "50%",
            animation: "spin 4s linear infinite"
          }}
        />

        {/* INNER RING */}

        <div
          style={{
            position: "absolute",
            width: "90px",
            height: "90px",
            border: "2px solid white",
            borderRadius: "50%",
            animation: "spinReverse 3s linear infinite"
          }}
        />

        {/* CORE */}

        <div
          style={{
            width: "40px",
            height: "40px",
            background: "cyan",
            borderRadius: "50%",
            boxShadow: "0 0 40px cyan"
          }}
        />

      </div>

      {/* CSS ANIMATION */}

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

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

        `}

      </style>

    </div>

  );

}

export default ArcReactor;