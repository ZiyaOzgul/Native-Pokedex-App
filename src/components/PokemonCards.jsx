import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getCurrentPokemonsAsync } from "../redux/pokeSlicer";
import { useDispatch } from "react-redux";

const PokemonCards = ({ pokemon, index }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      className="w-1/2 h-auto"
      onPress={() => {
        navigation.navigate("PokemonPage");
        dispatch(getCurrentPokemonsAsync(index + 1));
      }}
    >
      <View className="w-full h-auto items-center justify-center mt-2">
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          }}
          className="w-full h-40 rounded-full"
        />
        <Text className="text-center font-semibold text-xl">
          {pokemon.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCards;
