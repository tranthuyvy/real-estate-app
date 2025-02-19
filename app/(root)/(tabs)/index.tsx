import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="font-bold text-3xl font-rubik my-10 text-primary-300">
        Welcome to RealEstate
      </Text>
    </View>
  );
}
