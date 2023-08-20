export interface GroupSelectorProps {
  type?: 'Preliminary' | 'Finals';
  label: string;
  selected: boolean;
  onClick: () => void;
}
