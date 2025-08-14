import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { useDispatch } from "react-redux";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { pokemonTypes } from "../utils";

function CompareContainer({ pokemon, isEmpty = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createStatsArray = (types, statType) => {
    const statsArray = [];
    const statsSet = new Set();
    types.forEach((type) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat) => {
        if (!statsSet.has(stat)) {
          // @ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };

  const getStats = () => {
    return (
      <>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Strength</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "strength").map((stat) => (
              <div className="pokemon-type" key={stat.name}>
                <img src={stat.image} alt="" className="pokemon-type-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Weakness</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "weakness").map((stat) => (
              <div className="pokemon-type" key={stat.name}>
                <img src={stat.image} alt="" className="pokemon-type-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Resistance</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "resistance").map((stat) => (
              <div className="pokemon-type" key={stat.name}>
                <img src={stat.image} alt="" className="pokemon-type-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Vulnerable</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "vulnerable").map((stat) => (
              <div className="pokemon-type" key={stat.name}>
                <img src={stat.image} alt="" className="pokemon-type-image" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button onClick={() => navigate("/search")}>
            <FaPlus />
          </button>
          <h3>Add Pokemon for Comparison</h3>
        </div>
      )}
      {pokemon && (
        <div className="compare-element" key={pokemon?.id}>
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon?.name}</h3>
              <img
                src={pokemon?.image}
                alt="pokemon"
                className="compare-image"
              />
            </div>
            <div className="pokemon-types-container">
              <div className="pokemon-types">
                <h4 className="pokemon-type-title">Type</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map((type) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="pokemon-type" key={keys[0]}>
                        <img
                          src={type[keys[0]].image}
                          alt="pokemon type"
                          className="pokemon-type-image"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="compare-action-buttons">
            <button
              className="compare-btn"
              onClick={() => {
                dispatch(addPokemonToList(pokemon));
              }}
            >
              Add
            </button>
            <button
              className="compare-btn"
              onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
            >
              View
            </button>
            <button
              className="compare-btn"
              onClick={() => dispatch(removeFromCompare({ id: pokemon?.id }))}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompareContainer;