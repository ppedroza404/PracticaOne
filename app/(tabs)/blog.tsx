import BlogList from "@/components/BlogList";
import ScreenTitle from "@/components/ScreenTitle";
import { View, Text } from "react-native";

export default function TabBlogScreen() {
  const blogs = [
    {
      id: "1",
      title: "Mi primer blog",
      description: "Esta es una breve descripción de mi primer blog.",
      imageUri: "https://picsum.photos/201/300/?blur=2",
    },
    {
      id: "2",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/202/300/?blur=2",
    },
    {
      id: "3",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/203/300/?blur=2",
    },
    {
      id: "4",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/204/300/?blur=2",
    },
    {
      id: "5",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/205/300/?blur=2",
    },
    {
      id: "6",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/206/300/?blur=2",
    },
    {
      id: "7",
      title: "Otro blog interesante",
      description: "Descripción breve de otro blog interesante.",
      imageUri: "https://picsum.photos/207/300/?blur=2",
    },
  ];

  return (
    <View className="flex-1 mt-8 bg-gray-300">
      <ScreenTitle />
      <BlogList blogs={blogs} />
    </View>
  );
}
