import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const handleSubmit = async (e) => {
    console.log("action handlesubmit performs");
    
    setError("");
    console.log("Username:", username);
    console.log("password:", password);
    console.log("Email:", email);
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      console.log(response, "response");
      console.log("  Api response", response.status);
    
      const data = await response.json();
      console.log(" Api response data", data);
      if (data && data.username) {
        register(data.username ||id, username, email, password);
        console.log("data stored", username, email, password);
        navigate("/home");
      } else {
        console.log("no user id data  ");
      }
    } catch (err) {
      console.log("login eror", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="mt-44 lg:mt-28 mb-28 justify-items-center">
      <h1 className="text-2xl font-bold  flex align-center justify-center tracking-widest mb-1 ">
        Register your Account
      </h1>
      <div className="max-w-lg mx-auto border-zinc-500 p-8">
        {error && <p className="text-center">{error}</p>}
        <form className=" space-y-3">
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
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-zinc-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter username "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-zinc-300 rounded-lg"
            />
          </div>

         
        </form>
        <button
            type="submit"
            onClick={handleSubmit}
            className="h-12 w-36 justify-items-center bg-blue-500 text-white py-2 rounded-md mt-3"
          >
           Register
          </button>
      </div>
      <p> Dont have an account? <a href="/login"                                   className="h-12  justify-items-center text-blue-600 text-lg underline py-2 rounded-full mt-3"

       >Login</a></p>
    </div>
  );
};

export default Register;
