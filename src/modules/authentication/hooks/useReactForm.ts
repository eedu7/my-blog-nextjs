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
            await signIn("login", value);
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
            await signIn("register", value);
            router.push("/");
        },
    });

    return {
        loginForm,
        registerForm,
    };
};
