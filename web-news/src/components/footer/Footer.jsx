import React from 'react'
import Photo from '../../assets/logo-facebook-gris.png'
import Photo1 from '../../assets/twitter_logo.png'
import Photo2 from '../../assets/instagram.png'
import '../../components/footer/Footer.styles.scss'

export const Footer = () => {
  return (
    <>
    
    <footer className="footer__terms">
    <div >
        <ul className='footer__terms-list'>
            <li className='footer__terms-item'>Privacy policy</li>
            <li className='footer__terms-item'>Terms of Service</li>
            <li className='footer__terms-item'>Terms of Sale</li>
            <li className='footer__terms-item'>Help</li>
            <li className='footer__terms-item'>Subscriptors</li>
        </ul>
    </div>
    <div className='footer__icon'>
        
        <img src={Photo} alt="facebook" className='footer__icon-item' />
        <img src={Photo1} alt="twitter" className='footer__icon-item' />
        <img src={Photo2} alt="instagram" className='footer__icon-item' />

    </div>
</footer>
      
    </>
  )
}
