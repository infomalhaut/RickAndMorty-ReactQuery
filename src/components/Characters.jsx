import React, { useEffect,useState } from 'react'
import {useQuery} from 'react-query';
import { Spinner } from '@chakra-ui/react'
import { Character } from './Character';
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Characters = () => {

  const [page,setPage]=useState(1)

  const fetchCharacters = async({queryKey})=>{
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
      );
    return response.json();
   };

  const {data, status} = useQuery(["characters",page], fetchCharacters) //(unique key, function) // key1 = characters 1,; key2 = charaters 2;
  
  if(status === "loading"){
    return <Spinner />
  }

  if(status === "error"){
    return <div>Error occured</div>
  }

  return (
    <div>
      <p className='font-bold text-4xl text-center m-4'>Rick and Morty Characters</p>
      <div className='grid grid-cols-2 gap-4'>
        {data.results?.map((character) =>(
            <Character key={character.id} character={character}/>
        ))}
        </div>
        <div className='flex m-2'>
        <Button colorScheme='blue' className='m-2' disabled={page === 1} onClick={()=>{setPage(page-1)}}>prev</Button>
        <Button colorScheme='blue' className='m-2' disabled={page === 42} onClick={()=>{setPage(page+1)}}>next</Button>
        </div>
    </div>
  )
}
