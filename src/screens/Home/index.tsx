import React from 'react';
import {
  Container,
  Header,
  Title,
  Text,
  Content
} from './styles';


export function Home(){
  return (
    <Container>
      <Header>
        <Title>Plataforma de cursos</Title>
      </Header>
      <Content>
        <Text>Bem vindo a plataforma de cursos</Text>
      </Content>
    </Container>
  )
}