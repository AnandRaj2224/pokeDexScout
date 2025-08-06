import { createSlice } from '@reduxjs/toolkit';
// Thunk to get the initial list of { name, url } for all Pokémon
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';
// Thunk to get the detailed data for a CHUNK of Pokémon
import { getPokemonData } from '../reducers/getPokemonData'; // You'll need this thunk too

const initialState = {
  // 1. Holds the master list of all 1302 Pokémon (name & url)
  allPokemon: undefined,

  // 2. Will store the DETAILED Pokémon data as it's fetched in chunks
  pokemonRecords: [],

  // 3. Tracks loading state for better UX
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ---- Logic for the initial master list ----
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      // This correctly sets the master list once
      state.allPokemon = action.payload;
    });

    // ---- Logic for lazy-loading detailed data ----
    builder.addCase(getPokemonData.pending, (state) => {
      state.isLoading = true;
    });
 builder.addCase(getPokemonData.fulfilled, (state, action) => {
      // ✅ THE FIX: Check if action.payload is an array before using it.
      if (action.payload && Array.isArray(action.payload)) {
        state.pokemonRecords.push(...action.payload);
      }
      state.isLoading = false;
    });    builder.addCase(getPokemonData.rejected, (state) => {
      // Handle errors if the chunk fails to load
      state.isLoading = false;
    });
  },
});

export default pokemonSlice.reducer;