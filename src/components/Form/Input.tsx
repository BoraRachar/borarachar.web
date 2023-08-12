"use client";
import Image from "next/image";
import { HTMLInputTypeAttribute, useState } from "react";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: { src: string; pos: "left" | "right" };
  width?: string;
  label?: string;
  onClickIcon?: () => void;
}

function getFlexDirection(iconPos: "left" | "right" | undefined) {
  if (iconPos === "left") {
    return "flex-row";
  } else if (iconPos === "right") {
    return "flex-row-reverse";
  } else {
    return null;
  }
}

export default function Input({type, icon, name, placeholder, width, label, onClickIcon, control}: InputProps<any>) {
  const {field: { value, onChange, onBlur }, fieldState: { invalid, error }} = useController({ control, name });
  
  return (
    <fieldset className={`input-container-${name} w-full`}>
      {label && (
        <label
          htmlFor={name}
          className="text-neutral-black font-medium text-[16px]"
        >
          {label}
        </label>
      )}
      <div
        id={`input-wrapper-${name}`}
        className={`flex ${getFlexDirection(
          icon?.pos
        )} p-[11px] h-[46px] ${width} ${
          label ? "mt-[8px]" : ""
        } relative justify-center items-center rounded-md border-[1px] border-[#9C9C9C]`}
      >
        {icon && (
          <Image
            onClick={onClickIcon}
            id={`input-icon-${name}`}
            className={`${
              onClickIcon ? "cursor-pointer" : "pointer-events-none"
            } absolute self-center z-0 ${
              icon.pos === "left" ? "left-3" : "right-3"
            }`}
            src={icon.src}
            alt="icon"
            width={20}
            height={20}
          />
        )}
        <input
          id={name}
          placeholder={placeholder}
          className={`${
            icon?.pos === "left" ? "pl-7" : "pr-7"
          } bg-transparent ${
            type == "password" && value.length > 0
              ? "text-[24px] tracking-wider"
              : "text-[16px]"
          } w-full text-neutral-gray-500 placeholder:text-neutral-gray-500 outline-none font-medium`}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {invalid && (
        <p
          id={`input-error-${name}`}
          className="text-red-600 text-[14px] italic mt-[8px]"
        >
          {error?.message}
        </p>
      )}
    </fieldset>
  );
}
