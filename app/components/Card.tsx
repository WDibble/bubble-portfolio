// components/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  color?: string;
  width?: string;
  height?: string;
  margin?: string;
  shadow?: string;
  rounded?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  color = 'bg-white',   // Default background color
  width = 'auto',       // Default width
  height = 'auto',      // Default height
  margin = 'm-2',       // Default margin
  shadow = 'shadow-lg', // Default shadow
  rounded = 'rounded-lg',// Default rounded corners
}) => {
  const style = `${color} ${width} ${height} ${margin} ${shadow} ${rounded} p-4`;
  return (
    <div className={style}>
      {children}
    </div>
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
    color = 'text-gray-900',       // Default color
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
    color = 'text-gray-900',       // Default color
  }) => {
    const style = `${size} ${fontWeight} ${tracking} ${color}`;
    return (
      <h2 className={style}>
        {children}
      </h2>
    );
  };
