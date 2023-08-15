import { ElementType } from "react";

interface ButtonIconProps {
   icon: ElementType;
   onClick?: () => void;
   isInvalid?: boolean;
   isTouched?: boolean;
}

export function InputIcon({
   icon: Icon,
   onClick,
   isInvalid,
   isTouched,
}: ButtonIconProps) {
   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   };
   if (isTouched && !isInvalid)
      return (
         <Icon
            width={24}
            height={24}
            color="#34A853"
            className="mx-1"
            onClick={handleClick}
         />
      );
   return (
      <Icon
         width={24}
         height={24}
         color={isInvalid ? "#EA4335" : "#979797"}
         className="mx-1"
         onClick={handleClick}
      />
   );
}
