import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_blue};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const ContentTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  margin-top: 10px;
`;
export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.background_blue};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
