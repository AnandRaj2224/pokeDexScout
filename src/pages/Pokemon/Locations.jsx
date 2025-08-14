import React from "react";
import { useSelector } from "react-redux";

function Locations() {
  const pokemonData = useSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  return (
    <div className="pokemon-locations">
      <ul className="pokemon-locations-list">
        {pokemonData?.encounters.map((encounter) => (
          <li key={encounter} className="pokemon-location">
            {encounter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;