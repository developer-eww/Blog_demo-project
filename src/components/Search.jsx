"use client";

import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import authlogin from "../store/authlogin";
export function Search() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  // const { user, logout } = useAuthStore();
const{logout} = authlogin();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure want to logout?");
    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };
  return (
    <div className=" w-full bg-zinc-200 py-0.5">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between py-1 sm:px-6">
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
          <span className="font-bold text-2xl sm:text-3xl tracking-wide ml-0 sm:ml-8 text-gray-700">
            BLOG{" "}
          </span>
        </div>
        <div className="flex w-80 sm:w-auto justify-center sm:justify-end mt-0.5 sm:mt-0">
          <input
            type="text"
            placeholder="Search For Products"
            className="border-none rounded-xl px-5 py-0 h-6 w-96 sm:w-64 text-xs"
          />
          <button className="border-l-amber-500 ml-2 rounded-full py-0 px-5 bg-[#FFD333] font-medium text-xs h-6">
            Search
          </button>
        </div>
        <div className="flex justify-end sm:block mr-5">
          <div className="flex sm:block mr-4">
            <button onClick={() => setShowDropdown(!showDropdown)}>
              <AccountCircleIcon className="h-12 text-4xl hover:text-blue-600" />
            </button>
            {showDropdown && (
              <div className="absolute right-10 mt-3 w-40 bg-white border rounded-md shadow-lg">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                >Profile
                </button>
               
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
