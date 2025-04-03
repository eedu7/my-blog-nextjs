import { useForm } from "@tanstack/react-form";
import { SignInFormSchema, SignUpFormSchema } from "../schemas/form-schemas";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const useReactForm = () => {
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
            await signIn("login", {
                redirect: false,
                redirectTo: process.env.NEXT_AUTH_SIGN_IN_REDIRECT_URL,
                email: value.email,
                password: value.password,
            });
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
            await signIn("register", {
                redirect: false,
                redirectTo: process.env.NEXT_AUTH_SIGN_UP_REDIRECT_URL,
                email: value.email,
                password: value.password,
                username: value.username,
            });
            router.push("/");
        },
    });

    return {
        loginForm,
        registerForm,
    };
};
