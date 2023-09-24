import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions, StyleSheet } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TouchIcon = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 50px;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
