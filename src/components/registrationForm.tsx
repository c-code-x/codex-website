"use client";

import React from "react";
import { useEffect, useState } from "react";

type RegistrationFormProps = {
  rollNo: string;
  semester: string;
  branch: string;
  username: string;
  collegename: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function RegistrationForm({
  rollNo,
  semester,
  branch,
  username,
  collegename,
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
    <div className="relative bg-white min-h-screen overflow-hidden">
      
      {/* Gradient circle bg */}
      <div
        className={`
          absolute right-[-75%] transform -translate-x-1/2
          w-[500px] h-[1000px]
          md:w-[1000px] md:h-[800px] md:rounded-tl-full
          lg:w-[1400px] lg:h-[900px] lg:rounded-tl-full
          bg-gradient-to-br from-cyan-300 to-blue-400 shadow-2xl shadow-gray-600 z-0
          transition-all duration-700 ease-in-out
          ${show ? "scale-100 opacity-100" : "scale-200 opacity-0"}
        `}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-2 md:px-8 pt-10 md:pt-0">
        
        {/*Join us text */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
          <div
            className={`
              text-white text-center md:text-left
              transition-all duration-700 ease-in-out
              ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold my-8">
              Join with us <br/><br /> New User !!
            </h2>
          </div>
        </div>

        {/* profile Form */}
        <div className="w-full md:w-1/2 lg:ml-[-10%] flex justify-center items-center order-2 md:order-1">
          <div
            className={`
              w-full max-w-md
              transition-all duration-700 ease-in-out
              ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl shadow-gray-600 p-7 w-full"
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                className="w-full py-4 px-5 mb-5 text-base text-gray-900 bg-gray-200 rounded-lg border-2 border-white focus:border-blue-500 outline-none"
                required
              />
              <input
                type="text"
                name="rollNo"
                placeholder="Roll Number"
                value={rollNo}
                onChange={onChange}
                className="w-full py-4 px-5 mb-5 text-base text-gray-900 bg-gray-200 rounded-lg border-2 border-white focus:border-blue-500 outline-none"
                required
              />
              <input
                type="text"
                name="semester"
                placeholder="Semester"
                value={semester}
                onChange={onChange}
                className="w-full py-4 px-5 mb-5 text-base text-gray-900 bg-gray-200 rounded-lg border-2 border-white focus:border-blue-500 outline-none"
                required
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={branch}
                onChange={onChange}
                className="w-full py-4 px-5 mb-5 text-base text-gray-900 bg-gray-200 rounded-lg border-2 border-white focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                name="college"
                placeholder={collegename}
                className="w-full py-4 px-5 mb-7 text-base text-black font-semibold bg-gray-300 rounded-lg border-2 border-white focus:border-blue-500 outline-none"
                readOnly
              />
              {error && (
                <div className="text-red-500 text-sm mb-2">{error}</div>
              )}
              <button
                type="submit"
                className="w-full py-2 rounded-lg border-none bg-cyan-400 text-white text-xl cursor-pointer outline-none shadow-lg shadow-gray-300"
              >
                Complete Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
