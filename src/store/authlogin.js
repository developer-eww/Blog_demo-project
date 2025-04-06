import {create} from 'zustand';

const authlogin = create((set)=>({
    token:null,
    username: null,
    password: null,
    
    login:(token, username, password) => set({token, username,password}),
    
    logout:() =>set({token:null,username: null,
        password: null,}),


   
}));
export default authlogin;