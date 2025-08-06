import React, { useEffect } from 'react';
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
// Import the getPokemonData thunk
import { getPokemonData } from '../app/reducers/getPokemonData';

function Search() {
  const dispatch = useAppDispatch();
  // Select the records you want to display, not just the master list
  const { allPokemon, pokemonRecords } = useAppSelector(({ pokemon }) => pokemon);

  // This effect fetches the master list of all Pokémon (name & url). It's working correctly.
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  // This effect should fetch the detailed data for a random subset.
  useEffect(() => {
    // Ensure the master list exists and you haven't loaded records yet
    if (allPokemon && pokemonRecords.length === 0) {
      const clonedPokemons = [...allPokemon];
      const randomPokemons = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      
      // ✅ **THE FIX:** Dispatch getPokemonData with the random selection
      dispatch(getPokemonData(randomPokemons));
    }
  }, [allPokemon, pokemonRecords, dispatch]);

  // Now you can use `pokemonRecords` to render your UI
  return (
    <div>
      {/* Example of how you would render the data */}
      {pokemonRecords.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
}

export default Wrapper(Search);