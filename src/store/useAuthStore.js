import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn : false,

  register: async (username, email, password, navigate) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log(response, "response");
      console.log("  Api response", response.status);
      if (response.ok && data?.username) {
        set({
          user: {
            id: data.id,
            username,
            email,
            password,
          },
          isLoading: false,
          isLoggedIn: true,
        });
        navigate("/home");
        console.log("registration successfull");
      } else {
        set({ isLoading: false });
      }
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  logout: () => set({
     user: null,
     error: null,
    isLoggedIn: false,

     }),
}));

export default useAuthStore;
