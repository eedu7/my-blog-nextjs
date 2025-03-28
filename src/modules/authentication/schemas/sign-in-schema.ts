import { z } from "zod";
import { useForm } from "@tanstack/react-form";

export const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(18, "Password must be at most 18 characters long."),
});
