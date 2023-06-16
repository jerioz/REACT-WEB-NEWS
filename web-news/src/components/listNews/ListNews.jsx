// import React, { useContext, useEffect } from "react";
// import { GlobalContext } from "../../context/GlobalState";

// const ListNews = () => {
//     const { listNews, getNews } = useContext(GlobalContext);
//     useEffect(() => {
//         getNews();
//     }, []);
//     const news = listNews.map((news) => {
//         return (
//         <div key={news.ip}>
//             <h1>{news.title}</h1>
//             <p>{news.abstract}</p> 
//         </div>
//             );
//         });
       
//     };

//     export default ListNews;

import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { Character } from '../character/Character'
import { GlobalContext } from '../../context/GlobalState'

export const ListNews = () => {
   
    const { characters,  getCharacters } = useContext(GlobalContext);

        useEffect(() => {
        getCharacters()
        }, [])
        
    return (
    <>
    <h1>Most Read News</h1>
    {characters.map((character) => (
   <Character key={character.id} title={character.title} abstract={character.abstract}/>))}
    </>
  )
}
