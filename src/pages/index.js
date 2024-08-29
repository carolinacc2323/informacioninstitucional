import React from "react"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import './index.css'

const Index = () => {
  return (
    <>
      <main className="inicio">
        <Navbar/>
        <h1>Bienvenido a Patrimonio</h1>
      </main>
      
      <Footer/>
    </>
  )
}

export default Index

export const Head = () => <title>Inicio</title>
