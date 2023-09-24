import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_blue};

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TouchIcon = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 24px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const ContentInfo = styled.View`
  padding: 0 20px;
`;

export const ContentLesson = styled.View`
  padding: 0 20px;
  flex: 1;
`;

export const ContentTitle = styled.View`
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
`;

export const Divider = styled.View`
  width: 90%;
  margin: 20px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text_dark};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TitleCourse = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Instructor = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Duration = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LessonItem = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
`;

export const LessonTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const LessonDescription = styled.Text`
  font-size: ${RFValue(14)}px;
`;
