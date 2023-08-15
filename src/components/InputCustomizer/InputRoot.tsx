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
   children: React.ReactNode;
}

export function InputRoot({
   label,
   control,
   name,
   children,
}: InputRootProps) {
   const {
      field: { value, onChange, onBlur },
      fieldState: { invalid, error, isTouched },
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
               isTouched
                  ? invalid
                     ? "border-[#EA4335]"
                     : "border-[#34A853]"
                  : "border-[#929DA7]"
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
