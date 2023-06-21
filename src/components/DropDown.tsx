'use client'
import { useState, SyntheticEvent } from 'react';
import Image from 'next/image';
import plusIcon from '@/assets/plusIcon.svg';
import minusIcon from '@/assets/minusIcon.svg';

interface DropDownProps {
  title: String;
  message: string;
}

export default function DropDown({ title, message }: DropDownProps) {
  const [activeButton, setActiveButton] = useState(false);

  const handleClickButton = (event: SyntheticEvent) => {
    event.preventDefault();
    setActiveButton(!activeButton);
  }
 
  const dropdownHeight = activeButton ? 'auto' : '89px';

  return (
      <details className={`flex flex-col w-full min-h-${dropdownHeight} border-b mb-4 border-[#A7A7A7]`}>
        <summary className='list-none'>
          <div 
            className='flex justify-between text-xl font-color-dark mb-4'
            id={`dropdown-${title}`}
          >
            {title}
            <button onClick={(event) => handleClickButton(event)} id={`dropdown-button-${title}`}>
              {!activeButton ? (
                <Image src={plusIcon} alt="" width={30} height={30} />
              ) : (
                <Image src={minusIcon} alt="" width={30} height={30} />
              )}
            </button>
          </div>
          <div 
            className={`text-justify font-color-dark mb-5 overflow-hidden ${activeButton ? '' : 'line-clamp-2'}`}
            id={`dropdown-${message}`}  
          >
            <p>{activeButton && message}</p>
          </div>
        </summary>
      </details>
  );
}