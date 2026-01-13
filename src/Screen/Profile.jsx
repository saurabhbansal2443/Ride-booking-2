import React from "react";
import EditProfile from "../Components/EditProfile";
import { LogOut, ChevronRight, ShieldCheck, Bell, CreditCard } from "lucide-react";

const Profile = () => {
  return (
    /* Main Container with matching Slate-900 background */
    <div className="min-h-screen bg-[#0f172a] selection:bg-blue-500/30">
      
      {/* 1. Background Ambient Glow (Optional - for high-end feel) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* 2. The Edit Profile Component */}
        <EditProfile />

        {/* 3. Additional Profile Menu Options (To fill the screen) */}
        <div className="max-w-md mx-auto px-5 -mt-4 pb-20">
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-widest">Preferences</p>
            
            <div className="bg-[#1e293b]/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm">
              <MenuOption icon={<CreditCard size={18} />} label="Payment Methods" />
              <MenuOption icon={<Bell size={18} />} label="Notifications" />
              <MenuOption icon={<ShieldCheck size={18} />} label="Privacy & Security" />
            </div>

            <button className="w-full mt-6 flex items-center justify-between p-4 bg-red-500/5 border border-red-500/20 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg group-hover:scale-110 transition-transform">
                  <LogOut size={18} />
                </div>
                <span className="font-semibold">Log Out</span>
              </div>
              <ChevronRight size={18} className="opacity-50" />
            </button>
            
            <p className="text-center text-slate-600 text-xs mt-8">Version 2.4.0 • Made with ❤️ for Riders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Helper Component for the menu items */
const MenuOption = ({ icon, label }) => (
  <button className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-none">
    <div className="flex items-center gap-4 text-slate-300">
      <div className="text-blue-400">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
    </div>
    <ChevronRight size={16} className="text-slate-600" />
  </button>
);

export default Profile;