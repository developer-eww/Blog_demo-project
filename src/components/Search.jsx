"use client";

import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import authlogin from "../store/authlogin";

export function Search() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const { logout } = authlogin();

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <div className="w-full bg-zinc-200 py-0.5">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between py-1 sm:px-6">
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
          <span className="font-bold text-2xl sm:text-3xl tracking-wide ml-0 sm:ml-8 text-gray-700">
            BLOG
          </span>
        </div>

 
        <div className="flex w-80 sm:w-auto justify-center sm:justify-end mt-0.5 sm:mt-0">
          <input
            type="text"
            placeholder="Search For Products"
            className="border-none rounded-xl px-5 py-0 h-6 w-96 sm:w-64 text-xs"
          />
          <button className="ml-2 rounded-full py-0 px-5 bg-[#FFD333] font-medium text-xs h-6">
            Search
          </button>
        </div>

  
        <div className="flex justify-end sm:block mr-5">
          <div className="flex sm:block mr-4 relative">
            <button onClick={() => setShowDropdown(!showDropdown)}>
              <AccountCircleIcon className="h-12 text-4xl hover:text-blue-600" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-40 bg-white border rounded-md shadow-lg z-50">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>


      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p className="text-sm mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogoutConfirm}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
