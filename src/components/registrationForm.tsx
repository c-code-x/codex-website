"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

type RegistrationFormProps = {
  roll_no: string;
  semester: string;
  branch: string;
  user_name: string;
  college_name: string;
  error?: string;
  // FIX: Updated type to allow for select elements
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function RegistrationForm({
  roll_no,
  semester,
  branch,
  user_name,
  college_name,
  error,
  onChange,
  handleSubmit,
}: RegistrationFormProps) {
  
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden flex items-center justify-center">
      
      {/* Gradient circle background - mirrored version of login */}
      <div className={`
        absolute top-0 right-0
        w-full h-full
        sm:w-full sm:h-full
        md:w-[70%] md:h-[120%] md:-top-10 md:rounded-bl-full
        lg:w-[65%] lg:h-full lg:top-0 lg:rounded-bl-full
        xl:w-[55%] xl:h-full xl:rounded-bl-full
        bg-gradient-to-bl from-cyan-400 via-sky-400 to-blue-500 
        shadow-2xl shadow-gray-600 z-0
        transition-all duration-700 ease-in-out
        ${show ? "scale-100 opacity-95" : "scale-105 opacity-0"}
      `}></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen py-12 lg:py-16 gap-8 lg:gap-12">
          
          {/* Left side - Registration form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className={`
              w-full max-w-sm sm:max-w-md p-6 sm:p-8 lg:p-10
              bg-white rounded-2xl shadow-2xl shadow-black/30
              backdrop-blur-sm transition-all duration-700 ease-in-out delay-300
              ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-3 -mt-5">
                  <Image
                    src="/codex.png" 
                    alt="CodeX Logo"
                    width={60} 
                    height={60}
                    className="w-20 h-20 sm:w-15 sm:h-15"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
                  Complete Your Profile
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Username"
                  value={user_name}
                  onChange={onChange}
                  className="
                    w-full py-3 sm:py-4 px-4 sm:px-5
                    text-base text-gray-900 
                    bg-gray-100 rounded-xl 
                    border-2 border-gray-200
                    hover:border-blue-300 
                    focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100
                    outline-none transition-all duration-300
                  "
                  required
                />

                <input
                  type="text"
                  name="roll_no"
                  placeholder="Roll Number"
                  value={roll_no}
                  onChange={onChange}
                  className="
                    w-full py-3 sm:py-4 px-4 sm:px-5
                    text-base text-gray-900 
                    bg-gray-100 rounded-xl 
                    border-2 border-gray-200
                    hover:border-blue-300 
                    focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100
                    outline-none transition-all duration-300
                  "
                  required
                />

                <input
                  type="number"
                  name="semester"
                  placeholder="Semester"
                  value={semester}
                  onChange={onChange}
                  className="
                    w-full py-3 sm:py-4 px-4 sm:px-5
                    text-base text-gray-900 
                    bg-gray-100 rounded-xl 
                    border-2 border-gray-200
                    hover:border-blue-300 
                    focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100
                    outline-none transition-all duration-300
                  "
                  min="1"
                  max="8"
                  required
                />

                <select
                  name="branch"
                  value={branch}
                  onChange={onChange}
                  className="
                    w-full py-3 sm:py-4 px-4 sm:px-5
                    text-base text-gray-900 
                    bg-gray-100 rounded-xl 
                    border-2 border-gray-200
                    hover:border-blue-300 
                    focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100
                    outline-none transition-all duration-300
                  "
                  required
                >
                  <option value="" disabled>Select your branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="MECH">MECH</option>
                  <option value="EEE">EEE</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="IT">Business</option>
                  <option value="Other">Humanities</option>
                  <option value="Other">Science</option>
                </select>

                <input
                  type="text"
                  name="college_name"
                  placeholder={college_name}
                  className="
                    w-full py-3 sm:py-4 px-4 sm:px-5
                    text-base text-gray-700 font-semibold
                    bg-gray-200 rounded-xl 
                    border-2 border-gray-300
                    outline-none cursor-not-allowed
                  "
                  readOnly
                />

                {error && (
                  <div className="text-red-500 text-sm font-medium px-1">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="
                    w-full py-3 sm:py-4 px-6
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    text-white font-semibold text-base sm:text-lg
                    rounded-xl shadow-lg
                    hover:from-cyan-500 hover:to-blue-600 hover:shadow-xl hover:-translate-y-0.5
                    active:scale-[0.98]
                    transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-blue-100
                  "
                >
                  Complete Profile
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Join with us text */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-5 lg:mb-0 order-1 lg:order-2">
            <div className={`
              text-center lg:text-right px-4 lg:px-8 -mt-10
              transition-all duration-700 ease-in-out delay-200
              ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
            `}>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                Join with us
              </h1>
              {/*<h2 className="text-white/95 text-xl sm:text-2xl md:text-3xl font-semibold mt-4 drop-shadow-md">
                New User!
              </h2>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}