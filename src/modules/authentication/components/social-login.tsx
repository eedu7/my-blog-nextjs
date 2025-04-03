import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { RiGithubFill, RiGoogleFill } from "@remixicon/react";


interface SocialLoginProps {
    name: "Log in" | "Sign up"
}

export const SocialLogin = ({name}: SocialLoginProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Button
                variant="outline"
                onClick={() => signIn("google")}
                className="cursor-pointer"
            >
                <RiGoogleFill
                    className="me-1 text-[#DB4437] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                {name} with Google
            </Button>

            <Button
                variant="outline"
                onClick={() => signIn("github")}
                className="cursor-pointer"
            >
                <RiGithubFill
                    className="me-1 text-[#333333] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                {name} with GitHub
            </Button>
        </div>
    )
}

