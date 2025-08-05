import { createSlice } from '@reduxjs/toolkit';
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';

const initialState = {
  allPokemon : undefined,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled,(state,action) => {
      state.allPokemon = action.payload
    });
  }
});

export default pokemonSlice.reducer;
