"use client";

import { useForm } from "@tanstack/react-form";
import { SignInFormSchema, SignUpFormSchema } from "../schemas/form-schemas";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export const useReactForm = () => {
    const { login, register } = useAuth();
    const router = useRouter();
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onChange: SignInFormSchema,
        },
        onSubmit: async ({ value }) => {
            await login.mutateAsync(value);
            router.push("/");
        },
    });
    const registerForm = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        validators: {
            onChange: SignUpFormSchema,
        },
        onSubmit: async ({ value }) => {
            await register.mutateAsync(value);
            router.push("/");
        },
    });

    return {
        loginForm,
        registerForm,
    };
};
