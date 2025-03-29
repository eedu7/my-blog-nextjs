import { checkUserExist, registerUser } from "./../api/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser } from "../api/auth.api";
import { useRouter } from "next/navigation";

export const useAuth = () => {
    const router = useRouter();

    const login = useMutation({
        mutationFn: loginUser,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            console.table(data);

            router.push("/");
        },
        onError: (error) => {
            console.error("Login failed!", error);
        },
    });

    const register = useMutation({
        mutationFn: registerUser,
        mutationKey: ["registerUser"],
        onSuccess: (data) => {
            console.table(data);
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
