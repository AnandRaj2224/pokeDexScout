import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonRoute } from "../../utils/constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
  try {
    const { data } = await axios.get(PokemonRoute);
    return data.results;
  } catch (err) {
    console.log(err);
  }
}); 