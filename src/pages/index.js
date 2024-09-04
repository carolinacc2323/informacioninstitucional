import React from "react"
import Footer from "../components/Footer/footer"
import './index.css'

const Index = () => {
  const styleh1 ={
    fontSize:'50px',
    fontFamily: 'Georgia, serif',
    margintop: '50px',
  }
  const btn ={
    fontSize:'20px',
    fontFamily: 'Century Gothic, serif',

  }
  return (
    <>
      <main className="inicio">
        <div className="container">
          <div>
            <h1 style={styleh1}>Bienvenido a Patrimonio</h1>
          </div>
        </div>
        <div>
          <button id="btn"><a style={btn} href="/Bienvenida">¡CONÓCENOS!</a></button>
        </div>
      </main>
      
      <Footer/>
    </>
  )
}

export default Index

export const Head = () => <title>Inicio</title>
