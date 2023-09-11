import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import TypesCard from "../components/TypesCard";
import AbilityCard from "../components/AbilityCard";
import StatsCard from "../components/StatsCard";

const PokemonPage = () => {
  const Loading = useSelector((state) => state.poke.isLoading);
  const currentPokemon = useSelector((state) => state.poke.currentPokemon);

  if (currentPokemon == "") {
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
    // console.log(currentPokemon);
    return (
      <LinearGradient colors={["#eab308", "#fbbf24"]}>
        <SafeAreaView className="w-full h-screen items-center justify-center ">
          <ScrollView>
            <View className="w-full h-auto items-center justify-center">
              <Image
                className="w-80 h-80 mt-4 "
                source={{
                  uri: currentPokemon.sprites.front_default,
                }}
              />
            </View>
            <Text className="font-bold text-5xl text-center mt-2 uppercase">
              {currentPokemon.forms[0].name}
            </Text>
            <Text className="text-center text-xl font-semibold mt-1">
              Types :
            </Text>
            <View className="w-full items-center justify-center">
              <FlatList
                data={currentPokemon.types}
                horizontal
                keyExtractor={(poke) => poke.slot}
                renderItem={(poke) => <TypesCard poke={poke.item} />}
              />
            </View>
            <Text className="text-center text-xl font-semibold mt-2">
              Abilities :
            </Text>
            <View className="w-full items-center justify-center">
              <FlatList
                data={currentPokemon.abilities}
                keyExtractor={(poke) => poke.slot}
                horizontal
                renderItem={(poke) => <AbilityCard poke={poke.item} />}
              />
            </View>
            <Text className="text-center text-xl font-semibold mt-2">
              Base Stats :
            </Text>
            <View className="w-full items-center justify-center">
              <FlatList
                data={currentPokemon.stats}
                horizontal
                renderItem={(poke) => <StatsCard poke={poke.item} />}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
  }
};

export default PokemonPage;
