import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Section = {
  title: string;
  description: string;
  screen: string;
};

const sections: Section[] = [
  { title: 'blog', description: 'Explora nuestras últimas publicaciones y artículos.', screen: 'blog' },
  { title: 'about', description: 'Encuentra información detallada sobre nuestros servicios y equipo.', screen: 'about' },
];

export default function InfoSection() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {sections.map((section) => (
        <TouchableOpacity
          key={section.title}
          style={styles.sectionContainer}
          // @ts-ignore
          onPress={() => navigation.navigate(section.screen)}
        >
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionDescription}>{section.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 16,
  },
  sectionContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});