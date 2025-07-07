"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Avatar selector component
const avatars = [
  "https://drive.google.com/uc?export=view&id=1I9mqMVst3ZzXD49xkpQwHhahRpr78Raz",
  "https://drive.google.com/uc?export=view&id=1XS3n7EeSWKG-8S8ZdW_9Z5_DNHwWsUKV",
  "https://drive.google.com/uc?export=view&id=14FsLD_RvzEJYoFugIPKYKtXOQ0Ypd69l",
  "https://drive.google.com/uc?export=view&id=1tIVgsXVb7-JX2T0RN7-IvabCWGrgrJQb",
  "https://drive.google.com/uc?export=view&id=1tYHiZZzBI-I1yYOEsCWZ7seNZwZd3x1l",
  "https://drive.google.com/uc?export=view&id=1y6AyJXdS4Mzln6NsA8m-xmQ9Kj-tFhBo",
  "https://drive.google.com/uc?export=view&id=1TAxsvE9PJCYFuj6yr9LzDpGBHzyArtPQ",
  "https://drive.google.com/uc?export=view&id=1qleaGbussXQJuk3caGNPlu7KgahQwSAj",
  "https://drive.google.com/uc?export=view&id=1LlpLl8SGDObLSjGbbmAzCD1Zo-BUAEew",
];

function AvatarSelector({ onSelect }: { onSelect: (url: string) => void }) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4 bg-white/90 backdrop-blur-sm p-4 sm:p-6 border border-gray-200 rounded-2xl shadow-xl mt-6 max-w-sm sm:max-w-md mx-auto">
      <div className="col-span-4 text-center mb-2">
        <p className="text-gray-600 font-medium text-sm">Choose Your Avatar</p>
      </div>
      {avatars.map((url, index) => (
        <Image
          key={index} src={url}
          width={80} height={80}
          alt={`Avatar ${index + 1}`}
          onClick={() => onSelect(url)}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover cursor-pointer border-3 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        />
      ))}
    </div>
  );
}

export default function EditProfile() {
  const { update } = useSession(); 
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    roll_no: "",
    semester: "",
    branch: "",
    college_name: "",
    profile_pic: "/Default.svg", // default
  });

  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user-profile", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data,
          profile_pic: data.profile_pic || "avater/default.svg",
        }));
      } catch (err) {
        console.error("Failed to fetch profile data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const updatedData = {
        user_name: formData.user_name,
        roll_no: formData.roll_no,
        semester: formData.semester,
        branch: formData.branch,
        college_name: formData.college_name,
        profile_pic: formData.profile_pic,
      };

      const res = await fetch("/api/user-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error("Update failed");

      await update?.();

      alert("Profile updated successfully!");

      router.push("/user-dashboard");
    } catch (err) {
      console.error(err);
      alert("Error updating profile.");
    }
  };

  const handleAvatarSelect = (url: string) => {
    setFormData((prev) => ({ ...prev, profile_pic: url }));
    setShowAvatarSelector(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-inter overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-10 w-full max-w-full">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h1 className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            <span>Edit Profile</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-xl flex items-center justify-center shadow-lg">
              <Image src="/person.svg" alt="Person Icon" width={20} height={20} className="filter invert sm:w-6 sm:h-6" />
            </div>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            Edit all your profile details here
          </p>
        </div>

        {/* Gradient line */}
        <div className="w-full h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-transparent rounded-full mb-8 sm:mb-12 shadow-sm"></div>

        {/* Edit Profile Content */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
            
            {/* Profile Picture Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 p-1 shadow-lg"> 
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={formData.profile_pic}
                      alt="Profile picture"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAvatarSelector((prev) => !prev)}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-sky-300 to-cyan-200 hover:from-sky-400 hover:to-cyan-300 transition-all border-4 border-white rounded-full shadow-lg group flex items-center justify-center transform hover:scale-110"
                  title="Change Avatar"
                >
                  <Image
                    src="/edit_icon.svg"
                    alt="Edit Icon"
                    width={18}
                    height={18}
                    className="filter invert"
                  />
                </button>
              </div>
              <p className="text-gray-600 text-sm font-medium">Click the edit button to change your avatar</p>
            </div>

            {showAvatarSelector && <AvatarSelector onSelect={handleAvatarSelect} />}

            {/* Form Section */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Your Details</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-sky-300 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Email ID</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed font-medium"
                  />
                  <p className="text-xs text-gray-400">Email cannot be changed</p>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white  hover:border-sky-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Roll Number</label>
                  <input
                    type="text"
                    name="roll_no"
                    value={formData.roll_no}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-sky-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 font-medium"
                    placeholder="Enter your roll number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Branch</label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-sky-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 font-medium"
                    placeholder="Enter your branch"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Semester</label>
                  <input
                    type="text"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-sky-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 font-medium"
                    placeholder="Enter your semester"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-500 text-sm font-semibold uppercase tracking-wider">College Name</label>
                  <input
                    type="text"
                    name="college_name"
                    value={formData.college_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-sky-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 font-medium"
                    placeholder="Enter your college name"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button
                  type="button"
                  onClick={() => router.push("/user-dashboard")}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="gray" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Cancel
                </button>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Image src="/save.svg" alt="Save" width={17} height={17} />
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}