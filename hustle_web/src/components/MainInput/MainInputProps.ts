export interface MainInputProps {
  type?: 'text' | 'number' | 'default';
  value?: string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  small?: boolean;
}
