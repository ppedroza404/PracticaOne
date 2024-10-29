import ImageGrid from '@/components/ImageGrid';
import InfoSection from '@/components/InfoSeccion';
import ScreenTitle from '@/components/ScreenTitle';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

export default function TabHomeScreen() {
  const route = useRoute();
  const screenName = route.name;

  return (
    <View style={styles.container}>
      <ScreenTitle />
      <ImageGrid />

      {/* Sección de información adicional */}
      <View style={styles.infoContainer}>
        <InfoSection/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: '#e5e5e5',
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});