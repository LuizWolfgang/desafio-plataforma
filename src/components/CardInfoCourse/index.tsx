import React from "react";

import { Container, Description, Title, Image } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  imageSource: string;
  lessons: Lesson[];
}

interface Lesson {
  lesson: string;
  description: string;
  uri: string;
}

interface Props {
  data: Course;
}
export function CardInfo({ data }: Props) {
  const navigation = useNavigation();

  function handleNavigationDetails() {
    navigation.navigate("courseDetails", { data });
  }

  return (
    <Container onPress={handleNavigationDetails}>
      <Image source={{ uri: data.imageSource }} />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Container>
  );
}
