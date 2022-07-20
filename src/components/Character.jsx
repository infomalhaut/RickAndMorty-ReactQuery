import React from 'react'

export const Character = ({character}) => {
  return (
    <div className='shadow-xl rounded-md '>
        <div className='m-2'>
            <div  className=''>
                <img src={character.image} alt=""/>
                <div>
                    <p>{character.name}</p>
                    <p>{character.status} - {character.species}</p>
                    <p>Last seen on{character.location.name}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
