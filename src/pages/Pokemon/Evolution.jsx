import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import { getPokemonsData } from "../../app/reducers/getPokemonsData";
import Loader from "../../components/Loader";

function Evolution() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const pokemonData = useSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = pokemonData.currentPokemon.evolution.map(
        ({ pokemon }) => pokemon
      );
      await dispatch(getPokemonsData(pokemons));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, pokemonData.currentPokemon]);

  return (
    <div className="page">
      {isLoaded ? (
        <PokemonCardGrid pokemons={pokemonData.randomPokemons} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Evolution;