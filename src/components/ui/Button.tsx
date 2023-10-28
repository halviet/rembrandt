import React from 'react';
import {cn} from "@/lib/utils";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({className, onClick, children}: ButtonProps) => {
  return (
      <button
          className={cn(
              "text-base cursor-pointer",
              className
          )}
          onClick={onClick}
      >
        {children}
      </button>
  );
};

export default Button;