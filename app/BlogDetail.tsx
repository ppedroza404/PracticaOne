import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type BlogDetailRouteProp = RouteProp<{ params: { blogId: string } }, 'params'>;

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUri: string;
};

type BlogDetailProps = {
  blog: Blog;
};

export default function BlogDetail() {
  const route = useRoute<BlogDetailRouteProp>();
  const { blogId } = route.params;

  // Aquí se puede cargar el detalle del blog usando `blogId`
  // Simulación de datos de un blog para la demostración:
  const blog = {
    title: "Blog Title Example",
    description: "Detailed description of the blog post.",
    imageUri: "https://picsum.photos/200/300/?random=1&blur=2"
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: blog.imageUri }} style={styles.image} />
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.description}>{blog.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});