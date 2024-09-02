import React from "react"

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#333",
    padding: "0.5em",
    textAlign: "center",
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
        <div style={{ gridArea: "s4" }}>
          <a href="https://tandem-app-qr.vercel.app/Politica/" style={linkStyles}>Política de Privacidad</a>
          <a href="https://tandem-app-qr.vercel.app/Cookies/" style={linkStyles}>Cookies</a>
          <a href="https://tandem-app-qr.vercel.app/Accesibilidad/" style={linkStyles}>Accesibilidad</a>
          <a href="https://tandem-app-qr.vercel.app/AvisoLegal/" style={linkStyles}>Aviso legal</a>
        </div>
    </footer>
  )
}

export default Footer