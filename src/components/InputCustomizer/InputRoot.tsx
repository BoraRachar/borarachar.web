"use client";
import classNames from "classnames";
import { HTMLInputTypeAttribute } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

interface InputRootProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  customClassesNames?: string;
  onClickIcon?: () => void;
  prepend?: () => React.ReactNode;
  append?: () => React.ReactNode;
}
export function InputRoot({
  type,
  label,
  prepend,
  append,
  customClassesNames,
}: InputRootProps) {
  const inputClasses = classNames(
    "flex",
    "w-full",
    "h-[46px]",
    "border-b-[1px]",
    "border-b-[#E6E6E6]",
    "text-[#929DA7]",
    customClassesNames
  );

  return (
    <div className="w-full flex flex-col">
      <label className="text-[16px] font-medium text-[#212B36]">{label}</label>
      <div className={inputClasses}>
        {prepend && <div className="flex items-center mx-2">{prepend()}</div>}
        <input type={type} className="w-full focus:outline-none"/>
        {append && append()}
      </div>
    </div>
  );
}
