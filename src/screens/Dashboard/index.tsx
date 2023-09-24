import React, { useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Content,
  Title,
  LogoutButton,
  LoadContainer,
  ContentTitle,
} from "./styles";
import theme from "../../styles/theme";
import { data } from "../../mocks";
import { CardInfo } from "../../components/CardInfoCourse";

export function Dashboard() {
  const [isLoading, setIsloading] = useState(false);

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{ uri: "https://github.com/LuizWolfgang.png" }}
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>luiz andré</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={() => null}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>

          <Content>
            <ContentTitle>
              <Title>Cursos</Title>
            </ContentTitle>

            <FlatList
              contentContainerStyle={{ marginBottom: 30, flexGrow: 1 }}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardInfo data={item} />}
            />
          </Content>
        </>
      )}
    </Container>
  );
}
