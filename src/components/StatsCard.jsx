import { View, Text } from "react-native";
import React from "react";

const StatsCard = ({ poke }) => {
  return (
    <View className="w-40 h-20 bg-orange-100 border border-orange-200 rounded-lg ml-2 items-center justify-center mt-2">
      <Text className="text-center text-xl font-semibold ">
        {poke.stat.name} : {poke.base_stat}
      </Text>
    </View>
  );
};

export default StatsCard;
