import { ElementType, HTMLInputTypeAttribute } from "react";
import {
   FieldValues,
   UseControllerProps,
   useController,
} from "react-hook-form";
import InputMask from "react-input-mask";

interface InputRootProps<T extends FieldValues = FieldValues>
   extends UseControllerProps<T> {
   type: HTMLInputTypeAttribute;
   placeholder?: string;
   label?: string;
   customClassesNames?: string;
   onClickIcon?: () => void;
   prepend?: ElementType;
   append?: ElementType;
   mask?: any;
}

export function InputField({
   placeholder,
   type,
   name,
   control,
   mask,
}: InputRootProps) {
   const {
      field: { value, onChange, onBlur },
      fieldState: { invalid, error },
   } = useController({ control, name });
   
   if (mask)
      return (
         <InputMask
            mask={mask}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className="w-full font-normal focus:outline-none"
         />
      );

   return (
      <input
         id={`input-${name}`}
         placeholder={placeholder}
         onChange={onChange}
         onBlur={onBlur}
         type={type}
         className="w-full font-normal focus:outline-none"
      />
   );
}
