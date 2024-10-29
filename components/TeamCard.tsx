import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUri: string;
};

export default function TeamMemberCard({ name, role , imageUri }: TeamMemberCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.roleText}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  roleText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
  },
});