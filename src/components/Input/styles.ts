import styled from "styled-components/native";
import { LabelColorProps } from "./types";

export const Container = styled.View``;

export const CustomInput = styled.TextInput.attrs({
  placeholderTextColor: "#b8b8b8",
})`
  background-color: #f5f5f5;
  font-size: 16px;

  height: 50px;

  border-radius: 10px;
  color: #1d1d1d;

  padding-horizontal: 10px;
`;

export const Label = styled.Text<LabelColorProps>`
  font-size: 18px;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#1d1d1d")};
`;
