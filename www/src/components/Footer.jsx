import React from 'react'
import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
         <footer className="footer">
           <div className="footer:__container">
             <div className="footer__container--copyrigth"><p> Todos los derechos reservados © </p></div>
             <div className="footer__container--redes">
               <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/></a>
               <a href=""><img src="https://img.icons8.com/ios-filled/50/000000/twitter-squared.png"/></a>
               <a href=""><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"/></a>
             </div>
           </div>
         </footer>
        </>
    )
}
