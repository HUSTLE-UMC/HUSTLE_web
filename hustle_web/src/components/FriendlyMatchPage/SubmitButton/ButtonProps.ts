export interface ButtonProps {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  login?: boolean;
  more?: boolean;
}
