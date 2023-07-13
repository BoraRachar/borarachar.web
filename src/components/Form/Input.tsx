"use client";
import Image from "next/image";
import { useState } from "react";

interface InputProps {
  type: "text" | "password";
  placeholder?: string;
  icon?: { src: string; pos: "left" | "right" };
  width?: string;
  label?: string;
  iconFunction?: () => void;
}

function getFlexDirection(iconPos: "left" | "right" | undefined) {
  if (iconPos === "left") {
    return "flex-row";
  } else if (iconPos === "right") {
    return "flex-row-reverse";
  } else if (iconPos === undefined) {
    return "";
  }
}

export default function Input({
  type,
  icon,
  placeholder,
  width = "w-[410px]",
  label,
  iconFunction,
}: InputProps) {
  const [input, setInput] = useState<string>("");
  return (
    <div className="input-container">
      {label && (
        <label className="text-neutral-black font-medium">{label}</label>
      )}
      <div
        id="input-wrapper"
        className={`flex ${getFlexDirection(
          icon?.pos
        )} p-[11px] h-[46px] ${width} ${
          label ? "mt-[8px]" : ""
        } relative justify-center items-center rounded-md border-[1px] border-[#9C9C9C]`}
      >
        {icon && (
          <Image
            id="input-icon"
            className={`${
              iconFunction ? "cursor-pointer" : "pointer-events-none"
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
          id="input"
          placeholder={placeholder}
          onChange={(event) => setInput(event.target.value)}
          className={`${
            icon?.pos === "left" ? "pl-7" : "pr-7"
          } bg-transparent ${
            type == "password" && input.length > 0
              ? "text-[24px] tracking-wider"
              : "text-[16px]"
          } w-full text-neutral-gray outline-none font-medium`}
          type={type}
        />
      </div>
    </div>
  );
}
