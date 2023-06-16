import React, { useEffect, useContext } from 'react'
import { Character } from '../character/Character'
import { GlobalContext } from '../../context/GlobalState'
import './ListNews.styles.scss'

export const ListNews = () => {
   
    const { characters,  getCharacters } = useContext(GlobalContext);

        useEffect(() => {
        getCharacters()
        }, [])
        
    return (
    <>
    <div>
      <h1 className='news__title'>Most Read News</h1>
      <div className='news__text'>
      {characters.map((character) => (
      <Character key={character.id} title={character.title} abstract={character.abstract}/>))}
      </div>
    </div>
    </>
  )
}
