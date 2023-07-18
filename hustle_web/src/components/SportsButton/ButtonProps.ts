export interface ButtonProps {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  onClick: () => void;
}
