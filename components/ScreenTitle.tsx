import { useRoute } from '@react-navigation/native';
import {  Text, View } from 'react-native';


export default function ScreenTitle() {
  const route = useRoute();
  const screenName = route.name;
  return (
    <View>
          <Text className="text-4xl font-bold p-3">{screenName === "index" ? "Home" : screenName}</Text>
    </View>
  );
}