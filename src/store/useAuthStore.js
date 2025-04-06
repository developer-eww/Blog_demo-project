import {create} from 'zustand';

const useAuthStore = create((set)=>({
    
    user: null,
    register: (id, username, email, password) => set({user: { id,username, email, password}}),

    logout: ()=> set({user: null})

}));
export default useAuthStore;