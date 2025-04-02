import { registerUser } from "./../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth.api";
import { setCookie } from "cookies-next/client";
import { AuthResponse } from "@/modules/authentication/api/auth.types";

const saveAuthData = (data: AuthResponse) => {
    setCookie("_JWT_ACCESS_TOKEN", data.token.access_token, {
        maxAge: data.token.expiry_minutes, // Converting into seconds
        secure: true,
        sameSite: "strict",
    });
    setCookie("_JWT_REFRESH_TOKEN", data.token.refresh_token, {
        secure: true,
        sameSite: "strict",
    });
    setCookie("_AUTH_USER_USERNAME", data.user.username, {
        secure: true,
        sameSite: "strict",
        maxAge: data.token.expiry_minutes,
    });
    setCookie("_AUTH_USER_EMAIL", data.user.email, {
        secure: true,
        sameSite: "strict",
        maxAge: data.token.expiry_minutes,
    });
    setCookie("_AUTH_USER_UUID", data.user.uuid, {
        secure: true,
        sameSite: "strict",
        maxAge: data.token.expiry_minutes,
    });
    setCookie("_AUTH_EXPIRE", data.token.expiry_minutes, {
        secure: true,
        sameSite: "strict",
        maxAge: 1,
    });
};

export const useAuth = () => {
    const login = useMutation({
        mutationFn: loginUser,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            saveAuthData(data);
        },
        onError: (error) => {
            console.error("Login failed!", error);
        },
    });

    const register = useMutation({
        mutationFn: registerUser,
        mutationKey: ["registerUser"],
        onSuccess: (data) => {
            saveAuthData(data);
        },
        onError: (error) => {
            console.error("Registration failed!", error);
        },
    });

    return {
        login,
        register,
    };
};
