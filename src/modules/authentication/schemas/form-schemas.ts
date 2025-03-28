import { z } from "zod";

export const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(18, "Password must be at most 18 characters long."),
});

export const SignUpFormSchema = SignInFormSchema.extend({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .max(12, "Username must not exceed 12 characters."),
});
