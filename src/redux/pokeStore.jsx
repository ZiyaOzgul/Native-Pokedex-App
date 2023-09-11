import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokeSlicer";

export const store = configureStore({
  reducer: {
    poke: pokeReducer,
  },
});
