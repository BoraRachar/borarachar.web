'use client';
import { useState, SyntheticEvent } from "react";
import Image from "next/image";

interface DropDownProps {
   id: number;
   title: String;
   message: string;
}

export default function DropDown({ id, title, message }: DropDownProps) {
   const [activeButton, setActiveButton] = useState(false);

   const handleClickButton = (event: SyntheticEvent) => {
      event.preventDefault();
      setActiveButton(!activeButton);
   };

   const dropdownHeight = activeButton ? "auto" : "89px";

   return (
      <details
         id={`dropdown-details-${id}`}
         className={`flex flex-col font-normal w-full min-h-${dropdownHeight} border-b mb-8 border-[#A7A7A7]`}
      >
         <summary className="list-none" id={`dropdown-summary-${title}`}>
            <div
               className="flex justify-between text-xl font-medium font-color-dark"
               id={`dropdown-${title}`}
            >
               {title}
               <button
                  onClick={(event) => handleClickButton(event)}
                  id={`dropdown-button-${title}`}
               >
                  {!activeButton ? (
                     <Image
                        src="/assets/plus-icon.svg"
                        alt="Plus icon"
                        width={30}
                        height={30}
                     />
                  ) : (
                     <Image
                        src="/assets/minus-icon.svg"
                        alt="Minus icon"
                        width={30}
                        height={30}
                     />
                  )}
               </button>
            </div>
            <div
               className={`text-justify font-color-dark mb-4 overflow-hidden ${
                  activeButton ? "" : "line-clamp-2"
               }`}
               id={`dropdown-${message}`}
            >
               <p className="mt-2">{activeButton && message}</p>
            </div>
         </summary>
      </details>
   );
}
