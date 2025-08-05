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
    <div className="relative bg-white min-h-screen overflow-hidden flex items-center justify-center">
      {/* Gradient circle background */}
      <div className={`
        absolute top-0 left-0
        w-full h-full
        sm:w-full sm:h-full
        md:w-[70%] md:h-[120%] md:-top-10 md:rounded-br-full
        lg:w-[65%] lg:h-full lg:top-0 lg:rounded-br-full
        xl:w-[55%] xl:h-full xl:rounded-br-full
        bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 
        shadow-2xl shadow-gray-600 z-0
        transition-all duration-700 ease-in-out
        ${show ? "scale-100 opacity-95" : "scale-105 opacity-0"}
      `}></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen py-8 lg:py-12">
          
          {/* Left side - Welcome text */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-20 -mt-20 lg:mb-0">
            <div className={`
              text-center lg:text-left
              transition-all duration-700 ease-in-out delay-200
              ${show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
            `}>
              <h1 className="text-white text-6xl md:text-6xl font-bold leading-tight">
                Welcome
              </h1>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className={`
              w-full max-w-sm sm:max-w-md p-6 sm:p-8 lg:p-10
              bg-white rounded-2xl shadow-2xl shadow-black/30
              backdrop-blur-sm transition-all duration-700 ease-in-out delay-300
              ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-3 -mt-5">
                  <Image
                  src="/codex.png" alt="CodeX Logo"
                  width={60} height={60}
                  className="w-20 h-20 sm:w-15 sm:h-15"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Login to CodeX
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Continue with your GITAM Google account
                </p>
              </div>

              <button 
              onClick={() => signIn("google")}
              className="
                w-full 
                border-2 border-gray-200 
                flex items-center justify-center gap-4 
                py-3 sm:py-4 px-6
                rounded-xl
                text-gray-700 font-medium text-base sm:text-lg
                hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg
                active:scale-[0.98]
                transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-4 focus:ring-blue-100
              "
              >
              <Image
                src="/Google__G__logo.svg" alt="Google"
                width={24} height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 opacity-80"
              />
              Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}