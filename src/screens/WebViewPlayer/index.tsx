import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { WebView } from "react-native-webview";
import { Container, Description, Title, TouchIcon } from "./styles";
import { Entypo } from "@expo/vector-icons";

interface Props {
  lesson: string;
  description: string;
  uri: string;
}
interface ItemProps {
  item: Props;
}

export function WebViewPlayer() {
  const route = useRoute();
  const navigation = useNavigation();

  const { item } = route.params as ItemProps;

  const embedUrl = item.uri;

  return (
    <>
      <Container>
        <TouchIcon onPress={() => navigation.goBack()}>
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
        <Title>{item.lesson}</Title>
        <Description>{item.description}</Description>
      </Container>
      <WebView
       source={{ uri: embedUrl }} style={{ flex: 1 }} />
    </>
  );
}
