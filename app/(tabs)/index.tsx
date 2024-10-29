
import ImageGrid from '@/components/ImageGrid';
import ScreenTitle from '@/components/ScreenTitle';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';


export default function TabHomeScreen() {
  const route = useRoute();
  const screenName = route.name;
  return (
        <View className="flex-1 mt-8 bg-gray-300">
            <ScreenTitle/>
            <ImageGrid/>
        </View>
  );
}

