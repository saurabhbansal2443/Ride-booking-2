import React from "react";
import EditProfile from "../Components/EditProfile";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-blue-500/30">
      <div className="relative z-10">
        <EditProfile />
      </div>
    </div>
  );
};

export default Profile;
