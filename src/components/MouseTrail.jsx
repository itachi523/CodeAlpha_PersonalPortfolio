import { useEffect, useState } from "react";

function MouseTrail() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

    };

    const click = () => {

      setClicked(true);

      setTimeout(() => {

        setClicked(false);

      }, 300);

    };

    window.addEventListener("mousemove", move);

    window.addEventListener("click", click);

    return () => {

      window.removeEventListener("mousemove", move);

      window.removeEventListener("click", click);

    };

  }, []);

  return (

    <>

      {/* OUTER RING */}

      <div
        style={{
          position: "fixed",
          left: position.x - 25,
          top: position.y - 25,
          width: clicked ? "70px" : "50px",
          height: clicked ? "70px" : "50px",
          border: "2px solid cyan",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "0.2s",
          boxShadow: "0 0 20px cyan"
        }}
      />

      {/* INNER DOT */}

      <div
        style={{
          position: "fixed",
          left: position.x - 6,
          top: position.y - 6,
          width: "12px",
          height: "12px",
          background: "cyan",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 20px cyan"
        }}
      />

    </>

  );

}

export default MouseTrail;