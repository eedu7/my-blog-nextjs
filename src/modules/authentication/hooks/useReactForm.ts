"use client";

import { useForm } from "@tanstack/react-form";
import { SignInFormSchema, SignUpFormSchema } from "../schemas/form-schemas";

export const useReactForm = () => {
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onChange: SignInFormSchema,
        },
        onSubmit: ({ value }) => {
            alert(JSON.stringify(value));
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
        onSubmit: ({ value }) => {
            alert(JSON.stringify(value));
        },
    });

    return {
        loginForm,
        registerForm,
    };
};
