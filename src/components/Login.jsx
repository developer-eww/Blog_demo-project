import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authlogin from "../store/authlogin";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const [isloading, setisLoading] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = authlogin((state) => state.login);

  const handleSubmit = async (e) => {
    setisLoading(true);
    console.log("action handlesubmit performs");
    setError("");
    console.log("Username:", username);
    console.log("password:", password);
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log("Api response", response.status);
      const data = await response.json();
      console.log(" Api response data", data);
      console.log(" Tokendata", data.token);
      if (data.token) {
        login(data.token, username, password);
        console.log("token stored", data.token, username, password);
        navigate("/home");
      } else {
        console.log("noToken data ");
      }
    } catch (err) {
      console.log("login error", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="mt-44 lg:mt-28 h-60 justify-items-center">
      <h1 className="text-2xl font-bold  flex align-center justify-items-center tracking-widest mb-1 text-center">
        Login
      </h1>
      <div>
        {error && <p className="text-center mt-64 text-sm">{error}</p>}
        <div className="max-w-lg mx-auto border-zinc-500 p-8">
          <form className=" space-y-5 w-96 p-10">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border-zinc-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-zinc-300 rounded-lg"
              />
            </div>
          </form>
          <button
            type="submit"
            disabled={isloading}
            onClick={handleSubmit}
            className={
              'h-10 w-32 justify-items-center bg-blue-500 text-white py-1 font-medium rounded-md mt-1 ml-8 transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""}'
            }
          >
            {setisLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <p className=" justify-items-center align-center ml-24">
          {" "}
          Dont have an account?{" "}
          <a
            href="/register"
            className="h-12  justify-items-center text-blue-600 text-lg underline py-2 rounded-full mt-3"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
