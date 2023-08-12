import { ElementType } from "react";

interface ButtonIconProps {
   icon: ElementType;
   onClick?: () => void;
   isInvalid?: boolean;
}

export function InputIcon({ icon: Icon, onClick, isInvalid }: ButtonIconProps) {
   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   };
   return (
      <Icon
         width={24}
         height={24}
         color={isInvalid ? "#EA4335" : "#637381"}
         className="mx-1"
         onClick={handleClick}
      />
   );
}
