import React from "react"
import logoministerio from "./ministerio.png"
import logoblanco from "./logoblanco.png"

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#333",
    padding: "0.5em",
    textAlign: "center",
  }
  const footerInnerStyles = {
    display: "grid",
    gridTemplateAreas: `"s1 s2 s3 s4 s5"`,
    columnGap: "5px",
    rowGap: "5px",
    padding: "0.5em",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  }
  const logoStyles = {
    width: "150px",
  }
  const smallerLogoStyles = {
    width: "100px",
    marginRight: "0.5em",
  }
  const iconStyles = {
    height: "30px",
    width: "30px",
    marginRight: "2em",
  }
  const linkStyles = {
    color: "#E9E9E9",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontWeight: "normal",
    margin: "0.5em",
  }
  return (
    <footer style={footerStyles} >
      <div style={footerInnerStyles} className="footerin">
        <div style={{ gridArea: "s1" }}>
          <img src={logoministerio} style={logoStyles} alt="Ministerio" />
        </div>
        <div style={{ gridArea: "s2" }}>
          <img src={logoblanco} style={smallerLogoStyles} alt="Logo Blanco" className="logoblanco" />
        </div>
        <div style={{ gridArea: "s4" }}>
          <a href="https://tandem-app-qr.vercel.app/Politica/" style={linkStyles}>Política de Privacidad</a>
          <a href="https://tandem-app-qr.vercel.app/Cookies/" style={linkStyles}>Cookies</a>
          <a href="https://tandem-app-qr.vercel.app/Accesibilidad/" style={linkStyles}>Accesibilidad</a>
          <a href="https://tandem-app-qr.vercel.app/AvisoLegal/" style={linkStyles}>Aviso legal</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer