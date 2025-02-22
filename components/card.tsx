import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

// --------------------------------------------------------

interface Props {
  onPress?: () => void;
}

export function FeaturedCard({ onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />

      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row item-center bg-[#fff]/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-[#fff]"
          numberOfLines={1}
        >
          Modern Apartments
        </Text>
        <Text className="text-base font-rubik text-[#fff]">
          Thanh Sơn, Tân Phú, Đồng Nai
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-[#fff]">$4,5</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-[#fff] shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row item-center absolute px-2 top-5 right-5 bg-[#fff]/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          Cozy Studio
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          Thanh Sơn, Tân Phú, Đồng Nai
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            $4,5
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
