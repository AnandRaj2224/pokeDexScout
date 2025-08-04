import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // your pokemon state here
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
