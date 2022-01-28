import React from "react";

import { CustomButton, ButtonText } from "./styles";
import { ButtonProps, TypeButtonENUM } from "./types";

export const Button = ({
  children,
  onPress,
  height,
  type = TypeButtonENUM.DEFAULT,
}: ButtonProps) => (
  <CustomButton onPress={onPress} height={height} type={type}>
    <ButtonText type={type}>{children}</ButtonText>
  </CustomButton>
);
