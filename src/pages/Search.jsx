import React, {useEffect} from 'react'
import Wrapper from "../sections/Wrapper"
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';

function Search() {
  const dispatch = useAppDispatch();
  const {allPokemon} = useAppSelector(({pokemon}) => pokemon);
useEffect(() => {
  dispatch(getInitialPokemonData()).unwrap()
    .then((data) => console.log('Dispatched data:', data))
    .catch((error) => console.error('Failed to fetch:', error));
}, [dispatch]);

useEffect(() => {
  if(allPokemon) {
    const clonedPokemons = [...allPokemon];
    const randmonPokemonsId = clonedPokemons.sort(() =>
    Math.random() - Math.random()).slice(0,20);
  }
},[allPokemon])
  return (<div>Search</div>)
}

export default Wrapper(Search);