"use client";
import { ReactNode, SyntheticEvent } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  customClassesNames?: string;
  onClick?: Function;
  icon?: ReactNode;
  title: string;
}

export default function Button({ 
  type, 
  customClassesNames, 
  onClick, 
  icon = null, 
  title, 
}: ButtonProps) {

    const handleClickButton = (event: SyntheticEvent) => {
      event.preventDefault();
      if (onClick) onClick();
    }
   
    if (type === 'primary') {
      return (
        <button
          id={`button-${title}`}
          className={`
            w-full py-4 bg-[#724fd8] rounded-[5px]
            text-base font-semibold text-white 
            ${customClassesNames}
          `}
          onClick={(event) => handleClickButton(event)}
        >
          {icon && <span>{icon}</span>}
          {title}
        </button>
      ); 
    }
    else if (type === 'secondary') {
      return (
        <button
          id={`button-${title}`}
          className={`
            w-full py-4 border-[1px] border-white rounded-[5px]
            text-base font-semibold text-white 
            ${customClassesNames}
          `}
          onClick={(event) => handleClickButton(event)}
        >
          {icon && <span>{icon}</span>}
          {title}
      </button>
      );
    }
    else return null;
}