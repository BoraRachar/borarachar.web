import { ReactNode } from "react";

interface ButtonProps {
  type: string;
  customClassesNames?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Buttons({ type, customClassesNames, onClick, icon}: ButtonProps) {
  return (
    <div>
      {type === 'primary' && (
        <>
          <button
            id="primary-button"   
            className={`
              w-full py-4 bg-[#724fd8] rounded-[5px]
              text-base font-semibold text-white 
              ${customClassesNames}
            `}
            onClick={onClick}
            >
              Comece a economizar
              {icon && <span>{icon}</span>}
          </button>
        </>
      )}
      {type === 'secondary' && (
        <>
          <button
            id="secondary-button"
            className={`
              w-full py-4 border-[1px] border-white rounded-[5px]
              text-base font-semibold text-white 
              ${customClassesNames}
          `}
          onClick={onClick}
          >
            Ver grupos
            {icon && <span>{icon}</span>}
          </button>
        </>
      )}
    </div>
  );
}