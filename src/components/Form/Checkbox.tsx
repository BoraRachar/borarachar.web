"use client";
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setRememberUser } from "@/features/AuthSlice";

interface CheckboxProps {
  title: string;
}

export default function Checkbox({ title }: CheckboxProps) {
  
  const { rememberUser } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-[8px] items-center">
      <div
        className="w-[16px] h-[16px] border-[1px] border-neutral-black rounded-[4px] relative flex items-center justify-center"
        id={`checkbox-input_wrapper-${title}`}
        // onClick={() => dispatch(setRememberUser(!rememberUser))}
      >
        <input
          type="checkbox"
          name="checkbox"
          checked={rememberUser}
          onChange={(() => console.log('Checkbox'))}
          id={`checkbox-${title}`}
          className="appearance-none rounded-[10px] border-[0px] border-neutral-black"
        />
        {rememberUser && (
          <Image
            className="absolute self-center select-none"
            id={`checkbox-checked_icon`}
            src="/assets/checked-icon.svg"
            alt="Icone de email"
            width={6}
            height={4}
          />
        )}
      </div>
      <label id={`checkbox-title-${title}`} className="font-normal text-sm">
        {title}
      </label>
    </div>
  );
}
