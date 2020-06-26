import React from 'react'
import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
         <footer className="footer">
           <div className="footer:__container">
             <div className="footer__container--copyrigth"><p> Todos los derechos reservador© </p></div>
             <div className="footer__container--redes">
               <a href=""> <img src="" alt="" srcset=""/> face</a>
               <a href=""> <img src="" alt="" srcset=""/> twitter</a>
               <a href=""> <img src="" alt="" srcset=""/>instagram</a>
             </div>
           </div>
         </footer>
        </>
    )
}
