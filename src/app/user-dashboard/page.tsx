"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import RegisteredEvents from "../../components/RegisteredEvents";

type UserData = {
  user_name: string;
  user_email: string;
  roll_no: string;
  semester: string;
  branch: string;
  college_name: string;
  profile_pic?: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user-profile");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      } finally {
        setLoading(false);
      }
    };
    if (status === "authenticated") {
      fetchUserData();
    } else if (status === "unauthenticated") {
      setLoading(false);
      router.push("/");
    }
  }, [status, session]);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 font-inter overflow-x-hidden">
      {/* Bg decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-10 w-full max-w-full">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h1 className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            <span>User Profile</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-xl flex items-center justify-center shadow-lg">
              <Image src="/person.svg" alt="Person Icon" width={20} height={20} className="sm:w-6 sm:h-6" />
            </div>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            View all your profile details here
          </p>
        </div>

        {/* Gradient line */}
        <div className="w-full h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-transparent rounded-full mb-8 sm:mb-12 shadow-sm"></div>

        {/* Profile Content */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Left Profile Card */}
            <div className="lg:col-span-1 w-full">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-cyan-300 to-sky-300 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                      <Image
                          src={userData?.profile_pic || user?.image || "/default-profile.png"}
                          alt="Profile picture"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">
                  {userData?.user_name || user?.name || "Your Name"}
                </h2>
                <p className="text-sky-400 font-semibold text-xl mb-4 sm:mb-6">Student</p>
              </div>
            </div>

            {/* Right Details Card */}
            <div className="lg:col-span-2 w-full">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Your Details</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2 min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-gray-900 text-base sm:text-lg font-medium break-all overflow-wrap-anywhere">
                      {userData?.user_email || user?.email || "N/A"}
                    </p>
                  </div>
                  
                  <div className="space-y-2 min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Branch</p>
                    <p className="text-gray-900 text-base sm:text-lg font-medium break-words">
                      {userData?.branch || "N/A"}
                    </p>
                  </div>
                  
                  <div className="space-y-2 min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Roll Number</p>
                    <p className="text-gray-900 text-base sm:text-lg font-medium break-all">
                      {userData?.roll_no || "N/A"}
                    </p>
                  </div>
                  
                  <div className="space-y-2 min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">College Name</p>
                    <p className="text-gray-900 text-base sm:text-lg font-medium break-words">Gitam</p>
                  </div>
                  
                  <div className="space-y-2 min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Semester</p>
                    <p className="text-gray-900 text-base sm:text-lg font-medium">
                      {userData?.semester || "N/A"}
                    </p>
                  </div>

                  <div className="space-y-1 min-w-0 mt-3 sm:mt-8">
                    <button
                      onClick={() => router.push("user-dashboard/edit-profile")}
                      className="w-full bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold py-2 sm:py-3 px-5 sm:px-7 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 text-base sm:text-lg"
                    >
                      <Image src="/edit_icon.svg" alt="Edit Icon" width={17} height={17} className="sm:w-6 sm:h-6" />
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RegisteredEvents />
      </div>
    </div>
  );
}