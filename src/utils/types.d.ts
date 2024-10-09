declare interface InputProps {
  width: number;
  type: string;
  placeholder: string;
  error?: string;
  label?: string;
  height?: number;
  background?: string;
  required?: boolean;
  fontSize?: number;
  iconLeft?: string;
  closePaddingTop?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
