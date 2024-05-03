// components/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  as?: 'section' | 'article' | 'div';
  color?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  shadow?: string;
  rounded?: string;
  borderColor?: string;
  borderWidth?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  as = 'div',
  color = 'bg-white',
  width = 'auto',
  height = 'auto',
  margin = 'm-2',
  padding = 'p-4',
  shadow = 'shadow-lg',
  rounded = 'rounded-lg',
  borderColor = 'border-transparent',
  borderWidth = 'border-0',
}) => {
  const Element = as;
  const borderStyle = `${borderColor} ${borderWidth}`;
  const style = `${color} ${width} ${height} ${margin} ${padding} ${shadow} ${rounded} ${borderStyle}`;
  
  return (
    <Element className={style} onClick={onClick} role={onClick ? "button" : undefined}>
      {children}
    </Element>
  );
};

interface HeaderProps {
    children: React.ReactNode;
    size?: string;
    fontWeight?: string;
    tracking?: string;
    color?: string;
  }
  
  export const H1: React.FC<HeaderProps> = ({
    children,
    size = 'text-2xl sm:text-4xl',   // Default size
    fontWeight = 'font-bold',       // Default weight
    tracking = 'tracking-tight',      // Default tracking
    color = 'text-gray-700',       // Default color
  }) => {
    const style = `${size} ${fontWeight} ${tracking} ${color}`;
    return (
      <h1 className={style}>
        {children}
      </h1>
    );
  };

  export const H2: React.FC<HeaderProps> = ({
    children,
    size = 'text-1xl sm:text-2xl',   // Default size
    fontWeight = 'font-bold',       // Default weight
    tracking = 'tracking-tight',      // Default tracking
    color = 'text-gray-700',       // Default color
  }) => {
    const style = `${size} ${fontWeight} ${tracking} ${color}`;
    return (
      <h2 className={style}>
        {children}
      </h2>
    );
  };
