import React, { useState } from 'react';
import { useLocalSearchParams, usePathname, router } from 'expo-router';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

import icons from '@/constants/icons';

// ------------------------------------------------------------

export default function Search() {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [seach, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-full bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={seach}
          onChangeText={handleSearch}
          placeholder="Search..."
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
}
