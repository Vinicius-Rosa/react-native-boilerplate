import { ReactChild } from "react";
import { GestureResponderEvent } from "react-native";

export enum TypeButtonENUM {
  DEFAULT = "default",
  DANGER = "danger",
  WHITE = "white",
  LIGHTER = "lighter",
}

export interface CustomButtonProps {
  type: TypeButtonENUM;
  height?: string | number | null;
}

export interface ButtonProps {
  type?: TypeButtonENUM;
  height?: string | number | null;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: ReactChild;
}
