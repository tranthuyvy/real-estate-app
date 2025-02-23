import images from '@/constants/images';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// ----------------------------------------------------------

export default function NoResults() {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
        No data
      </Text>

      <Text className="text-base text-black-100 mt-2">
        We couldn't find any data
      </Text>
    </View>
  );
}
