import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;
