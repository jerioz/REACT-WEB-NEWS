import React from 'react'

export const Character = (props) => {
  return (
    <>
    <h2>{props.title}</h2>
    <p>{props.abstract}</p>
   <img src={props.media[0]['media-metadata'][0].url} alt={props.title} />
    </>
  )
}
