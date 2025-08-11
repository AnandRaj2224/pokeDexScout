import { createSlice } from '@reduxjs/toolkit';
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';
import { getPokemonData } from '../reducers/getPokemonData';

const initialState = {
  allPokemon: [],
  randomPokemons: [], 
  compareQueue: [],
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      state.compareQueue = state.compareQueue.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.randomPokemons = action.payload; // fixed to store correctly
      }
      state.isLoading = false;
    });
    builder.addCase(getPokemonData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addToCompare, removeFromCompare } = pokemonSlice.actions;
export default pokemonSlice.reducer;
