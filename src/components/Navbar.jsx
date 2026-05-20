function Navbar({ openSection }) {

  const speak = (text) => {

    speechSynthesis.cancel();

    const voice = new SpeechSynthesisUtterance(text);

    voice.rate = 0.9;

    voice.pitch = 0.8;

    voice.volume = 1;

    speechSynthesis.speak(voice);

  };

  const handleClick = (section, message) => {

    speak(message);

    openSection(section, message);

  };

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        display: "flex",
        gap: "20px",
        background: "#02131f",
        padding: "15px 30px",
        border: "1px solid cyan",
        borderRadius: "50px",
        boxShadow: "0 0 20px cyan"
      }}
    >

      {/* HOME */}

      <button
        onClick={() =>
          handleClick(
            "home",
            "Opening home section sir"
          )
        }
        style={buttonStyle}
      >
        Home
      </button>

      {/* ABOUT */}

      <button
        onClick={() =>
          handleClick(
            "about",
            "Opening personal profile sir"
          )
        }
        style={buttonStyle}
      >
        About
      </button>

      {/* PROJECTS */}

      <button
        onClick={() =>
          handleClick(
            "projects",
            "Accessing projects database sir"
          )
        }
        style={buttonStyle}
      >
        Projects
      </button>

      {/* CONTACT */}

      <button
        onClick={() =>
          handleClick(
            "contact",
            "Opening contact panel sir"
          )
        }
        style={buttonStyle}
      >
        Contact
      </button>

      {/* RESUME */}

      <a
        href="/Bhuvan_Resume.pdf"
        download
        style={{
          ...buttonStyle,
          textDecoration: "none"
        }}
      >
        Resume
      </a>

    </div>

  );

}

const buttonStyle = {

  background: "transparent",

  border: "none",

  color: "cyan",

  fontSize: "18px",

  cursor: "pointer",

  transition: "0.3s"

};

export default Navbar;