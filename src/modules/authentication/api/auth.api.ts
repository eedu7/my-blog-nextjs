import { axiosClient } from "@/service/api";
import {
    CheckUserExistRequest,
    CheckUserExistResponse,
    LoginUserRequest,
    RegisterUserRequest,
} from "./auth.types";

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
