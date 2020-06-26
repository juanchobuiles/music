import React from 'react'
import '../styles/header.scss'
import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <>
          <header className="header">
            <div className="header__logo">
              <img src={Logo} alt="Logo" className="header__logo--img"/>
            </div>
          <nav className="header__nav" >
            <ul>
              <li><a href="">Acerca de Nosotros </a></li>
              <li><a href="">Contacto</a></li>
              <li><a href="">Perfil</a></li>
              
            </ul>
          </nav>
          </header>
        </>
    )
}
