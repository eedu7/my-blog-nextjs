"use client";

import { useForm } from "@tanstack/react-form";
import { SignInFormSchema, SignUpFormSchema } from "../schemas/form-schemas";
import { useAuth } from "./useAuth";

export const useReactForm = () => {
    const { login, register } = useAuth();
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onChange: SignInFormSchema,
        },
        onSubmit: async ({ value }) => {
            return await login.mutateAsync(value);
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
            return await register.mutateAsync(value);
        },
    });

    return {
        loginForm,
        registerForm,
    };
};
