import React from "react";
import {
  Container,
  Description,
  Duration,
  Instructor,
  LessonDescription,
  LessonItem,
  LessonTitle,
  Title,
  Image,
  Header,
  TouchIcon,
  ContentInfo,
  ContentLesson,
  TitleCourse,
  ContentTitle,
  Divider,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { Content } from "../Dashboard/styles";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  imageSource: string;
  lessons: Lesson[];
}

export interface Lesson {
  lesson: string;
  description: string;
  uri: string;
}

export interface Props {
  data: Course;
}

export function CourseDetails() {
  const route = useRoute();
  const { data } = route.params as Props;

  const navigation = useNavigation();

  function handleNavigationDetails(item: Lesson) {
    navigation.navigate("webViewPlayer", { item });
  }

  return (
    <Container>
      <Header>
        <TouchIcon onPress={() => navigation.goBack()}>
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
        <Title>Informações do curso</Title>
      </Header>

      <Image source={{ uri: data.imageSource }} />
      <ContentInfo>
        <ContentTitle>
          <TitleCourse>Titulo: {data.title}</TitleCourse>
        </ContentTitle>

        <Description>Descrição: {data.description}</Description>
        <Instructor>Instrutor: {data.instructor}</Instructor>
        <Duration>Duração: {data.duration}</Duration>
      </ContentInfo>
      <Divider />
      <ContentLesson>
        <FlatList
          data={data.lessons}
          keyExtractor={(item) => item.description}
          contentContainerStyle={{ flexGrow: 1, marginBottom: 30 }}
          renderItem={({ item }) => (
            <LessonItem onPress={() => handleNavigationDetails(item)}>
              <LessonTitle>{item.lesson}</LessonTitle>
              <LessonDescription>{item.description}</LessonDescription>
            </LessonItem>
          )}
        />
      </ContentLesson>
    </Container>
  );
}
