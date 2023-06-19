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
    
      {characters && characters.map((character) => (
      <div className='news__text' key={character.id}>
        <h2>{character.title}</h2>
        <p>{character.abstract}</p>
        <img src={character.media[0]['media-metadata'][2].url} alt={character.title} />
        <p><a href={character.url} className='news__link'>Go to the news</a></p>
      </div>
      ))}
      </div>
    </>
  )
}
