'use client'
import { ReactNode, SyntheticEvent } from "react";
import classNames from "classnames";

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
   };

   const buttonBaseClass =
      type === "primary" ? "bg-[#724fd8]" : "border-[1px] border-white";

   const buttonClasses = classNames(
      "w-full",
      "py-4",
      buttonBaseClass,
      "rounded-[5px]",
      "text-base",
      "font-semibold",
      "text-white",
      customClassesNames
   );

   return (
      <button
         id={`button-${title}`}
         className={buttonClasses}
         onClick={(event) => handleClickButton(event)}
      >
         {icon && <span>{icon}</span>}
         {title}
      </button>
   );
}
