import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/pokemonTypes";

export const getPokemonData = createAsyncThunk(
  "pokemon/getPokemonData",
  async (pokemons) => {
    try {
      const pokemonsData = [];
      for await (const pokemon of pokemons) {
        // Fetch detailed data for each Pokémon
        const { data } = await axios.get(pokemon.url);

        // Map over the types from the API response
        const types = data.types.map(({ type: { name } }) => {
          // For each type name (e.g., "grass"), create an object
          return {
            // 1. Add the name of the type
            name: name,
            // 2. Spread all properties (image, strength, etc.) from our pokemonTypes object
            ...pokemonTypes[name],
          };
        });

        // Handle Pokémon image
        let image = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }

        // Push the final, structured Pokémon object to our array
        if (image) {
          pokemonsData.push({
            name: data.name,
            id: data.id,
            image,
            types, // This is our new, easy-to-use types array
          });
        }
      }
      return pokemonsData;
    } catch (err) {
      console.error("Failed to fetch Pokémon data:", err);
      // Return an empty array or handle the error as needed
      return []; 
    }
  }
);