import colors from "src/assets/colors";
import styled from "styled-components/native";
import { CustomButtonProps } from "./types";

export const CustomButton = styled.TouchableOpacity<CustomButtonProps>`
  align-items: center;
  justify-content: center;

  width: 100%;

  ${({ type }) => {
    if (type === "default")
      return `
        background-color: ${colors.primary};
        color: ${colors.white};
    `;

    if (type === "white")
      return `
        background-color: ${colors.white};
        color: ${colors.darker};
    `;

    if (type === "lighter")
      return `
        background-color: ${colors.grey2};
        color: ${colors.darker};
    `;

    if (type === "danger")
      return `
        background-color: ${colors.danger};
        color: ${colors.darker};
    `;
  }}

  height: ${({ height }) => (height ? height : "50px")};

  border-radius: 10px;
`;

export const ButtonText = styled.Text<CustomButtonProps>`
  font-size: 18px;

  ${({ type }) => {
    if (type === "default" || type === "danger")
      return `
        color: ${colors.white};
    `;

    if (type === "white" || type === "lighter")
      return `
        color: ${colors.darker};
    `;
  }}
`;
