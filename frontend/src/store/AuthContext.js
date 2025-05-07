import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check-auth");

            set({authUser: res.data})
        } catch (error) {
            console.log("error in checkauth", error)
            set({authUser:null})
        } finally {
            set({isCheckingAuth: false})
        }
    },

    signup: async (data) => {
        set({isSigningUp: true})
        try {
            const response = await axiosInstance.post("/auth/signup", data);
            set({authUser: response.data})
            toast.success("Account created successfully");
            
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isSigningUp: false})
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            toast.success("Logged out successfully");
            set({authUser: null})
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    
    login: async (data) => {
        set({isLoggingIn: true})
        try {
            const response = await axiosInstance.post("/auth/login", data);
            set({authUser: response.data})
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isLoggingIn: false})
        }
    },

    updateProfile: async (data) => {
        set({isUpdatingProfile: true})
        try {
            const response = await axiosInstance.put("/auth/update-profile", data);
            set({authUser: response.data})
            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isUpdatingProfile: false})
        }
    }
}))