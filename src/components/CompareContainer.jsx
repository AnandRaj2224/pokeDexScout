import React from 'react';
import { FaPlus } from 'react-icons/fa';

function CompareContainer({ pokemon = undefined, isEmpty = false }) {
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3></h3>
        </div>
      )}

      {pokemon && (
        <div className="compare-element">
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
                <h4 className="pokemon-type-title">type</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map((type, index) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="pokemon-type" key={index}>
                        <img
                          src={type[keys[0]].image}
                          alt="pokemon type"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CompareContainer;
