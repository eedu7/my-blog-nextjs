import { useForm } from "@tanstack/react-form";
import { SignInFormSchema } from "../schemas/sign-in-schema";

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

    return {
        loginForm,
    };
};
