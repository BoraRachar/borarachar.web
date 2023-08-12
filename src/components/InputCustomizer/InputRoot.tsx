"use client";
import classNames from "classnames";
import { ElementType, HTMLInputTypeAttribute } from "react";
import {
   FieldValues,
   UseControllerProps,
   useController,
} from "react-hook-form";

interface InputRootProps<T extends FieldValues = FieldValues>
   extends UseControllerProps<T> {
   label?: string;
   isInvalid: boolean;
   children: React.ReactNode;
}

export function InputRoot({
   label,
   control,
   name,
   isInvalid,
   children,
}: InputRootProps) {
   const {
      field: { value, onChange, onBlur },
      fieldState: { invalid, error },
   } = useController({ control, name });

   return (
      <fieldset className="flex flex-col w-full">
         <label
            className="text-base font-medium text-[#212B36]"
            htmlFor={`input-${name}`}
         >
            {label}
         </label>
         <div
            className={`flex w-full border-b  pb-1 text-[#929DA7] mt-5 ${
               isInvalid ? "border-[#EA4335]" : "border-[#E6E6E6]"
            }`}
         >
            {children}
         </div>
         {invalid && (
            <p
               id={`input-error-${name}`}
               className="text-[#EA4335] font-regular text-xs mt-1"
            >
               {error?.message}
            </p>
         )}
      </fieldset>
   );
}
