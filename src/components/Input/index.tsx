import React from "react";

import { Container, CustomInput, Label } from "./styles";
import { InputProps } from "./types";

export const Input = ({
  label,
  labelColor,
  placeholder,
  secureTextEntry,
  onChange,
  value,
}: InputProps) => {
  return (
    <Container>
      <Label labelColor={labelColor}>{label}</Label>
      <CustomInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};
