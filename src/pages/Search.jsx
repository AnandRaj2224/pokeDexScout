import React, { useEffect } from 'react';
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon, pokemonRecords } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon && pokemonRecords.length === 0) {
      const clonedPokemons = [...allPokemon];
      const randomPokemons = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);

      dispatch(getPokemonData(randomPokemons));
    }
  }, [allPokemon, pokemonRecords, dispatch]);

  return (
    <div className="search">
      <input type="text" name="" id="" />
      <PokemonCardGrid Pokemons={pokemonRecords} />
    </div>
  );
}

export default Wrapper(Search);
