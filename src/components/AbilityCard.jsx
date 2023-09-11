import { View, Text } from "react-native";
import React from "react";

const AbilityCard = ({ poke }) => {
  return (
    <View className="w-40 h-10 mt-2 mx-1 bg-orange-100 border rounded-lg border-orange-200 items-center justify-center">
      <Text className="font-medium text-xl text-center">
        {poke.ability.name}
      </Text>
    </View>
  );
};

export default AbilityCard;
