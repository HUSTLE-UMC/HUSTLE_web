import * as icons from './svg';
import React from 'react';

type IconType = keyof typeof icons;
// 스토리에서 불러오기 위함
export const iconTypes: IconType[] = Object.keys(icons) as any[];

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: string | number;
  className?: string;
}

export const Icon = ({ icon, size, className, ...props }: IconProps) => {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon className={className} width={size} height={size} {...props} />
  );
};
