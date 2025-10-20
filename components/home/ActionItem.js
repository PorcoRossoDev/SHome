import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as HeroSolid from "react-native-heroicons/solid";
import * as HeroOutline from "react-native-heroicons/outline";

const ActionItem = ({ name, id, icon, size = 23, color = '#fff', variant = 'solid', close = false, plus = false}) => {
  const sets = { solid: HeroSolid, outline: HeroOutline };
  const IconComponent = sets[variant]?.[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" không tồn tại trong react-native-heroicons/${variant}`);
  }

  return (
    <TouchableOpacity className="flex-1 items-center justify-center mb-4">
      <View className="relative bg-green-400 w-[55%] aspect-square justify-center items-center rounded-full mb-2">
        {IconComponent ? (
          <IconComponent size={size} color={color} />
        ) : (
          <Text className="text-white text-xs">?</Text>
        )}
        {
            close == true ? (
            <TouchableOpacity className='bg-red-500 rounded-full w-5 h-5 flex-1 justify-center items-center absolute top-[-3px] left-[-3px]'>
                <HeroSolid.XMarkIcon size={12} color={color} />
            </TouchableOpacity>
            ) : (<></>)
        }
        {
            plus == true ? (
            <TouchableOpacity className='bg-green-600 rounded-full w-5 h-5 flex-1 justify-center items-center absolute top-[-3px] left-[-3px]'>
                <HeroSolid.PlusIcon size={12} color={color} />
            </TouchableOpacity>
            ) : (<></>)
        }
      </View>
      <Text className="text-center min-h-10 px-3 text-f13">{name}</Text>
    </TouchableOpacity>
  );
};

export default ActionItem;
