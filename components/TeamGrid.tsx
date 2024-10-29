import React from "react";
import { View, Image, StyleSheet } from "react-native";
import TeamMemberCard from "./TeamCard";

const team = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    imageUri: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maria Doe",
    role: "CTO",
    imageUri: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Carlos Fernadez",
    role: "DEV",
    imageUri: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Jessy Doe",
    role: "Marketing",
    imageUri: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function TeamGrid() {
  return (
    <View style={styles.gridContainer}>
      {team.map((member) => (
        <View key={member.id} style={styles.cardContainer}>
          <TeamMemberCard
            name={member.name}
            role={member.role}
            imageUri={member.imageUri}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 8,
  },
  cardContainer: {
    width: "48%",
    marginVertical: 3,
  },
});
