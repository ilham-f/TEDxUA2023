import { useState } from "react";
import React from "react";

export default function Input({label, id, placeholder, type}) {

  return (
    <>
        <div className="relative w-full container">
            <label htmlFor={id}
            className="mb-3 font-gooddog text-white text-[30px] md:text-[40px]"
            >
                {label}
            </label>
        </div>
        <div className="relative w-full container mb-3">
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            className="w-full
            p-3
            rounded-md
            outline-none
            focus:ring-red-500 focus:border-red-500 focus:ring-1
            xs:text-base
            text-[12px]
            "
        />
        </div>
    </>
  );
}
