import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/AppSlice';
import pokemonReducer from './slices/PokemonSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
