function ContactPanel() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        paddingTop: "150px",
        paddingLeft: "40px"
      }}
    >

      <h1
        style={{
          color: "cyan",
          fontSize: "50px",
          marginBottom: "40px"
        }}
      >
        CONTACT PANEL
      </h1>

      <p>Email : bhuvandarsibsk@gmail.com</p>

      <br />

      <p>Phone : 9059995719</p>

      <br />

      <a
        href="https://github.com/itachi523"
        target="_blank"
        style={{
          color: "cyan",
          display: "block"
        }}
      >
        GitHub
      </a>

      <br />

      <a
        href="https://www.linkedin.com/in/darsi-bhuvanasivakrishna"
        target="_blank"
        style={{
          color: "cyan",
          display: "block"
        }}
      >
        LinkedIn
      </a>

      <br />

      <p>Education : GITAM University CSE AIML</p>

      <br />

      <p>AI CORE : ACTIVE</p>

    </div>

  );

}

export default ContactPanel;