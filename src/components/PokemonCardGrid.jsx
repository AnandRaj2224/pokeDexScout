import React from 'react';

function PokemonCardGrid({ Pokemons }) {
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {Pokemons && Pokemons.length > 0 && Pokemons.map((data) => {
          return (
            <div className="pokemon-card" key={data.id}>
              <div className="pokemon-card-list"></div>
              <div className="pokemon-card-compare"></div>
              <h3 className="pokemon-card-title">{data.name}</h3>
              <img src={data.image} alt={data.name} className="pokemon-card-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCardGrid;
