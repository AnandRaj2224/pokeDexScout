import React, { useEffect } from 'react';
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon, pokemonRecords } = useAppSelector(({ pokemon }) => pokemon);

  // Load initial list of Pokémon
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  // Get random Pokémon when first loaded
  useEffect(() => {
    if (allPokemon && pokemonRecords.length === 0) {
      const clonedPokemons = [...allPokemon];
      const randomPokemons = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);

      dispatch(getPokemonData(randomPokemons));
    }
  }, [allPokemon, pokemonRecords, dispatch]);

  const getPokemon = (value) => {
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons || []));
    } else {
      // Show random pokémon again if search is cleared
      if (allPokemon) {
        const clonedPokemons = [...allPokemon];
        const randomPokemons = clonedPokemons
          .sort(() => Math.random() - Math.random())
          .slice(0, 20);

        dispatch(getPokemonData(randomPokemons));
      }
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="pokemon-searchbar"
        placeholder="search pokemon"
        onChange={(e) => getPokemon(e.target.value)}
      />
      <PokemonCardGrid Pokemons={pokemonRecords} />
    </div>
  );
}

export default Wrapper(Search);
