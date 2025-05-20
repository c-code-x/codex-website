"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden flex items-center justify-center px-4">
      {/* gradient circle bg */}
      <div className={
          `absolute left-30 transform -translate-x-1/2
          w-[700px] h-[1000px]
          md:w-[1000px] md:h-[800px] md:rounded-br-full
          lg:w-[1400px] lg:h-[900px] lg:rounded-br-full
          bg-gradient-to-br from-cyan-300 to-blue-400 shadow-2xl shadow-gray-600 z-0
          transition-all duration-700 ease-in-out
          ${show ? "scale-100 opacity-100" : "scale-200 opacity-0"}`
        }
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto min-h-screen px-4 md:px-12">
        
        {/* Left - Welcome Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mb-10 md:mb-0">
          <h2 className={`text-white text-4xl md:text-6xl font-bold text-center md:text-left
                        transition-all duration-700 ease-in-out
                        ${show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            Welcome
          </h2>
        </div>

        {/* Right Side: Google Login Container */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end items-center">
        <div className={`
            w-full max-w-md bg-white rounded-xl py-7 px-[10%] transition-all duration-700 ease-in-out shadow-2xl shadow-gray-400
            ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `} >

            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                LOGIN into CodeX
            </h3>
            <button onClick={() => signIn("google")}
                    className="w-full border border-gray-400 flex items-center justify-center gap-5 py-3 rounded-full text-black font-medium hover:shadow-xl hover:duration-300 transition">
                <Image
                    src="/Google__G__logo.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                />
                Sign in with Google
            </button>
        </div>
        </div>
      </div>
    </div>
  );
}
