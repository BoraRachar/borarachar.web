import { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
}

export function InputIcon({ icon: Icon }: ButtonIconProps) {
  return (
    <Icon />
  );
}