"use client";
import { registerUser } from "./../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth.api";
import { deleteCookie, setCookie } from "cookies-next/client";
import { AuthResponse } from "@/modules/authentication/api/auth.types";
import { useRouter } from "next/navigation";

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
};

export const useAuth = () => {
    const signIn = useMutation({
        mutationFn: loginUser,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            saveAuthData(data);
        },
        onError: (error) => {
            console.error("Login failed!", error);
        },
    });

    const signUp = useMutation({
        mutationFn: registerUser,
        mutationKey: ["registerUser"],
        onSuccess: (data) => {
            saveAuthData(data);
        },
        onError: (error) => {
            console.error("Registration failed!", error);
        },
    });

    const signOut = () => {
        deleteCookie("_JWT_ACCESS_TOKEN");
        deleteCookie("_JWT_REFRESH_TOKEN");
        deleteCookie("_AUTH_USER_USERNAME");
        deleteCookie("_AUTH_USER_EMAIL");
        deleteCookie("_AUTH_USER_UUID");
    };

    return {
        signIn,
        signUp,
        signOut,
    };
};
