import React from "react";
import { useSelector } from "react-redux";
import Info from "../../components/Info";
import PokemonContainer from "../../components/PokemonContainer";

function Description() {
  const pokemonData = useSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  return (
    <>
      <Info data={pokemonData} />
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
  );
}

export default Description;