import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = [
  { id: 1, uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg' },
  { id: 2, uri: 'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg' },
  { id: 3, uri: 'https://images.pexels.com/photos/2147479/pexels-photo-2147479.jpeg' },
  { id: 4, uri: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg' },
];

export default function ImageGrid() {
  return (
    <View style={styles.gridContainer}>
      {images.map((image) => (
        <View key={image.id} style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageContainer: {
    width: '48%',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
});