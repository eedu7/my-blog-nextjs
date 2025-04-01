import { axiosClient } from "@/service/api";
import {
    AuthResponse,
    CheckUserExistRequest,
    CheckUserExistResponse,
    LoginUserRequest,
    RegisterUserRequest,
} from "./auth.types";

export const registerUser = async (data: RegisterUserRequest): Promise<AuthResponse> => {
    try {
        const response = await axiosClient.post("/v1/auth/", data);
        return response.data;
    } catch (error) {
        console.error("User registration failed!", error);
        throw new Error("User registered failed!");
    }
};

export const loginUser = async (data: LoginUserRequest): Promise<AuthResponse> => {
    try {
        const response = await axiosClient.post("/v1/auth/login", data);
        return response.data;
    } catch (error) {
        console.error("User login failed!", error);
        throw new Error("User registered failed!");
    }
};

// TODO: Make a hook for this
export const checkUserExist = async ({
    field,
    value,
}: CheckUserExistRequest): Promise<CheckUserExistResponse | null> => {
    try {
        const response = await axiosClient.get(`/v1/users/exist/?${field}=${value}`);
        if (response.data.exist) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error in checking the user!", error);
        throw new Error("Error in checking the user");
    }
};
