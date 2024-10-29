import ScreenTitle from '@/components/ScreenTitle';
import TeamMemberCard from '@/components/TeamCard';
import TeamGrid from '@/components/TeamGrid';
import { View, Text } from 'react-native';

export default function TabAboutScreen() {
  return (
    <View className="flex-1 mt-8 bg-gray-300">
      <ScreenTitle/>
      <Text className="text-lg p-4 text-gray-700">
        Bienvenidos a Hotel Paraíso, un lugar escondido en la selva de Costa Rica, donde la naturaleza se mezcla con el lujo y el confort. Nuestro equipo está dedicado a brindar una experiencia única, asegurándose de que cada huésped disfrute de la hospitalidad costarricense en un entorno de paz y belleza inigualables.
      </Text>
      <Text className="text-4xl font-bold p-3">Our Team</Text>
      <TeamGrid/>
    </View>
  );
}

