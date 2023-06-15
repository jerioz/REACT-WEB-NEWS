import React from 'react'
import './Home.styles.scss'
import Photo from '../../assets/news.png'
import Photo1 from '../../assets/news1.png'
import Photo2 from '../../assets/news2.jpg'

const Home = () => {
  return (
    <>
      <div className='home__news-listPhoto'>
       <img src={Photo} alt='logo' className='home__news-photo'/>
       <img src={Photo1} alt='logo' className='home__news-photo'/>
       <img src={Photo2} alt='logo' className='home__news-photo'/>
       <img src={Photo} alt='logo' className='home__news-photo'/>
       <img src={Photo1} alt='logo' className='home__news-photo'/>
       <img src={Photo2} alt='logo' className='home__news-photo'/>
    </div>
    </>
  )
}

export default Home