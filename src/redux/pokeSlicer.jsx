import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonsAsync = createAsyncThunk(
  "/poke/fetchPokemonsAsync",
  async (currentPage) => {
    const currentOffset = currentPage * 30;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=30`
    );
    // console.log(res.data);
    return res.data;
  }
);

export const getCurrentPokemonsAsync = createAsyncThunk(
  "/poke/getCurrentPokemonsAsync",
  async (id) => {
    console.log(id);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(res);
    return res.data;
  }
);

export const pokeSlicer = createSlice({
  name: "poke",
  initialState: {
    pokemons: [],
    currentPokemon: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchPokemonsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchPokemonsAsync.fulfilled]: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload.results];
      console.log(state.pokemons);
      state.isLoading = false;
    },

    [getCurrentPokemonsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentPokemonsAsync.fulfilled]: (state, action) => {
      state.currentPokemon = action.payload;
    },
    [getCurrentPokemonsAsync.rejected]: (state, action) => {
      console.log(action.error.message);
    },
    // [getCurrentPokemonsAsync.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [getCurrentPokemonsAsync.fulfilled]: (state, action) => {
    //   state.currentPokemon = action.payload;
    //   state.isLoading = false;
    // },
  },
});

export default pokeSlicer.reducer;
