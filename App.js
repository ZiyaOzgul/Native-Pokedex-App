import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/pokeStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/App/HomeScreen";
import PokemonPage from "./src/App/PokemonPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonPage" component={PokemonPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
