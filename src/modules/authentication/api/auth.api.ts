import { axiosClient } from "@/service/api";
import { LoginUserRequest, RegisterUserRequest } from "./auth.types";

export const registerUser = async (data: RegisterUserRequest) => {
    try {
        const response = await axiosClient.post("/v1/auth/", data);
        return response.data;
    } catch (error) {
        console.error("User registration failed!", error);
    }
};

export const loginUser = async (data: LoginUserRequest) => {
    try {
        const response = await axiosClient.post("/v1/auth/login", data);
        return response.data;
    } catch (error) {
        console.error("User login failed!", error);
    }
};
