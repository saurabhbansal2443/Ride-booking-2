import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/AppSlice";
import {
  User,
  Mail,
  Phone,
  Camera,
  ChevronLeft,
  Save,
  X,
  Edit2,
  Star,
  Car,
} from "lucide-react";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { name, email, phoneNumber } = useSelector(
    (store) => store.app.userData
  );

  const [currentData, setCurrentData] = useState({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
  });

  function handleUpdateUserDetails() {
    if (currentData.name.trim().length === 0) return;
    if (currentData.email.trim().length === 0) return;
    dispatch(setUserData(currentData));
    setIsEditing(false);
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#0f172a] text-slate-200 pb-10 font-sans">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-5 bg-[#1e293b]/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold tracking-wide">
            Profile Settings
          </h1>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`p-2.5 rounded-xl transition-all duration-300 ${
            isEditing
              ? "bg-red-500/10 text-red-500 border border-red-500/20"
              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
          }`}
        >
          {isEditing ? <X size={20} /> : <Edit2 size={20} />}
        </button>
      </div>

      {/* Hero Profile Section */}
      <div className="relative overflow-hidden px-6 py-10 flex flex-col items-center">
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -z-10" />

        <div className="relative group">
          <div className="w-28 h-28 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center p-1 shadow-2xl shadow-blue-900/40">
            <div className="w-full h-full bg-[#1e293b] rounded-[1.4rem] flex items-center justify-center overflow-hidden">
              <User size={52} className="text-blue-400" />
            </div>
          </div>
          {isEditing && (
            <button className="absolute -bottom-2 -right-2 p-2.5 bg-blue-500 text-white rounded-xl border-4 border-[#0f172a] hover:scale-110 transition-transform">
              <Camera size={16} />
            </button>
          )}
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
          {name}
        </h2>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
            <Car size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-slate-300">47 Rides</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium text-slate-300">
              4.5 Rating
            </span>
          </div>
        </div>
      </div>

      {/* Details Card */}
      <div className="px-5">
        <div className="bg-[#1e293b]/40 border border-slate-800 rounded-[2rem] p-6 backdrop-blur-sm">
          {!isEditing ? (
            /* View Mode */
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Email Address
                  </p>
                  <p className="text-slate-200">{email}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-800" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                  <Phone size={18} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Mobile Number
                  </p>
                  <p className="text-slate-200">{phoneNumber}</p>
                </div>
              </div>
            </div>
          ) : (
            /* Edit Mode */
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    size={18}
                  />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                    value={currentData.name}
                    onChange={(e) =>
                      setCurrentData({ ...currentData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    size={18}
                  />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                    value={currentData.email}
                    onChange={(e) =>
                      setCurrentData({ ...currentData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Phone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    size={18}
                  />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                    value={currentData.phoneNumber}
                    onChange={(e) =>
                      setCurrentData({
                        ...currentData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <button
                onClick={handleUpdateUserDetails}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
              >
                <Save size={20} />
                Save Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
