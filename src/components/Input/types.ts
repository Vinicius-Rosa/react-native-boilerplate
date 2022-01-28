export interface LabelColorProps {
  labelColor?: string;
}

export interface InputProps {
  labelColor?: string;
  placeholder?: string;
  label: string;
  secureTextEntry?: boolean;
  onChange: ((text: string) => void) | undefined;
  value: string | undefined;
}
