"use client";
import Image from "next/image";

interface CheckboxProps {
   title: string;
   currentState: boolean;
   onClickFunction: () => void;
}

export default function Checkbox({
   title,
   currentState,
   onClickFunction,
}: CheckboxProps) {
   const handleCheckboxClick = () => {
      onClickFunction();
   };

   return (
      <fieldset className="flex flex-row items-center gap-2">
         <div
            className="w-4 h-4 border border-[#B3B3B3] rounded-sm relative flex items-center justify-center cursor-pointer"
            id={`checkbox-input-wrapper-${title}`}
            data-testid={`checkbox-input-wrapper-${title}`}
            onClick={() => handleCheckboxClick()}
         >
            <input
               type="checkbox"
               name="checkbox"
               readOnly
               checked={currentState}
               id={`checkbox-input-${title}`}
               data-testid={`checkbox-input-${title}`}
               className="appearance-none rounded-xl"
            />
            {currentState && (
               <Image
                  className="absolute self-center rounded-sm select-none bg-primary"
                  id={`checkbox-checked-icon-${title}`}
                  src="/assets/checked-icon.svg"
                  alt="Icone de email"
                  fill={true}
               />
            )}
         </div>
         <label
            id={`checkbox-label-${title}`}
            data-testid={`checkbox-label-${title}`}
            htmlFor={`checkbox-input-${title}`}
            className="text-sm font-normal text-[#5B585C]"
         >
            {title}
         </label>
      </fieldset>
   );
}
