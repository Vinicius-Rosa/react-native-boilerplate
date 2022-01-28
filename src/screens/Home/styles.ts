import styled from "styled-components/native";

import colors from "src/assets/colors";

export const Container = styled.View`
  position: relative;

  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};

  padding-top: 50px;
`;

export const Logo = styled.Image.attrs({
  width: 100,
  height: 100,
})`
  position: absolute;
  top: 80px;

  margin-bottom: 50px;
  max-width: 170px;
  max-height: 70px;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const OpenCameraButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 10px;
  min-width: 200px;
  padding: 15px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;

  padding-horizontal: 30px;
`;

export const Paragraph = styled.Text`
  align-self: flex-start;
  text-align: justify;
  padding-horizontal: 30px;
`;
