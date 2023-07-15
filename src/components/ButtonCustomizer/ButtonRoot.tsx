'use client'
import { ReactNode, SyntheticEvent } from "react";
import classNames from "classnames";

interface ButtonRootProps {
  type: "primary" | "secondary" | "tertiary";
  customClassesNames?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  children: ReactNode;
}

export function ButtonRoot({ 
  children,
  type,
  customClassesNames,
  iconPosition,
  onClick, 
}: ButtonRootProps) {

  const handleClickButton = (event: SyntheticEvent) => {
    event.preventDefault();
    if (onClick) onClick();
 };

  const buttonBaseClass =
    type === "primary" ? "bg-secondary": 
    type === "secondary" ? "border-[1px] border-neutral-white":
    type === "tertiary" ? "border-none": "";

  const iconPositionClass = 
    iconPosition === "left" ? "flex-row": 
    iconPosition === "right" ? "flex-row-reverse" : "";

  const buttonClasses = classNames(
      `flex ${iconPositionClass}`,
      "items-center",
      "justify-center",
      "w-full",
      "py-4",
      "rounded-[4px]",
      buttonBaseClass,
      customClassesNames
   );

  return (
    <button className={buttonClasses} onClick={handleClickButton}>
      {children}
    </button>
  );
}