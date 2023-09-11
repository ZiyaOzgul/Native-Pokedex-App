import { View, Text, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsAsync } from "../redux/pokeSlicer";
import PokemonCards from "../components/PokemonCards";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.poke.isLoading);
  const PokeData = useSelector((state) => state.poke.pokemons);
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(fetchPokemonsAsync(page));
  }, [page]);

  if (Loading && PokeData == "") {
    return (
      <LinearGradient colors={["#fef9c3", "#fde68a"]}>
        <SafeAreaView className="w-full h-screen items-center justify-center ">
          <Text className="text-red-400 font-bold text-center text-4xl">
            Loading...
          </Text>
        </SafeAreaView>
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient colors={["#fef9c3", "#fde68a"]}>
        <SafeAreaView className="w-full h-screen">
          <Text
            style={{ fontFamily: "Pixel" }}
            className="font-bold text-4xl text-black text-center mt-2"
          >
            Select A Pokemon
          </Text>
          <FlatList
            data={PokeData}
            key={(item) => item}
            renderItem={(pokemon, item) => (
              <PokemonCards pokemon={pokemon.item} index={pokemon.index} />
            )}
            // renderItem={(pokemon) => <Text> {pokemon.item.name} </Text>}
            numColumns={2}
            onEndReached={() => setPage((prev) => prev + 1)}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
};
export default HomeScreen;
