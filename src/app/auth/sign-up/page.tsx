"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIGN_IN_LINK } from "@/data/navigation-links";
import { checkUserExist } from "@/modules/authentication/api/auth.api";
import {
    AuthCardConsentParagraph,
} from "@/modules/authentication/components/auth-card-consent";
import { useReactForm } from "@/modules/authentication/hooks/useReactForm";
import { Separator } from "@/components/ui/separator";
import { SocialLogin } from "@/modules/authentication/components/social-login";

const SignUpPage = () => {
    const { registerForm } = useReactForm();
    return (
        <Card className="m-2 md:w-96">
            <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                    Join MyBlog today and start sharing your thoughts!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className="space-y-4"
                >
                    <registerForm.Field
                        name="username"
                        validators={{
                            onChangeAsync: async ({ value }) => {
                                return await checkUserExist({ field: "username", value: value });
                            },
                            onChangeAsyncDebounceMs: 500,
                            onBlurAsync: async ({ value }) => {
                                return await checkUserExist({ field: "username", value: value });
                            },
                            onBlurAsyncDebounceMs: 500,
                        }}
                        // eslint-disable-next-line react/no-children-prop
                        children={(field) => (
                            <div className="space-y-2">
                                <Label>Username</Label>
                                <div className="relative">
                                    <Input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="text"
                                        className={cn(
                                            "focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Username"
                                    />
                                    {field.state.meta.isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors[0]?.message}
                                        </em>
                                    )}
                                </div>
                            </div>
                        )}
                    />
                    <registerForm.Field
                        name="email"
                        validators={{
                            onChangeAsync: async ({ value }) => {
                                return await checkUserExist({ field: "email", value: value });
                            },
                            onChangeAsyncDebounceMs: 500,
                            onBlurAsync: async ({ value }) => {
                                return await checkUserExist({ field: "email", value: value });
                            },
                            onBlurAsyncDebounceMs: 500,
                        }}
                        // eslint-disable-next-line react/no-children-prop
                        children={(field) => (
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <div className="relative">
                                    <Input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="text"
                                        className={cn(
                                            "focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Email"
                                    />
                                    {field.state.meta.isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors[0]?.message}
                                        </em>
                                    )}
                                </div>
                            </div>
                        )}
                    />
                    <registerForm.Field
                        name="password"
                        // eslint-disable-next-line react/no-children-prop
                        children={(field) => (
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <div>
                                    <Input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="password"
                                        className={cn(
                                            "focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Password"
                                    />
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            </div>
                        )}
                    />
                </form>
            </CardContent>
            <CardFooter>
                <div className="flex w-full flex-col space-y-2">
                    <div className="w-full">
                        {/* TODO: Do not use hard coded value, make a varialbe */}
                        <Link className="float-end text-xs text-blue-800" href={SIGN_IN_LINK.href}>
                            Already have an account? Log in
                        </Link>
                    </div>
                    <Button
                        variant="default"
                        className="w-full cursor-pointer"
                        onClick={() => registerForm.handleSubmit()}
                    >
                        Sign Up
                    </Button>
                    <Separator />
                    <SocialLogin name="Sign up"/>
                    <AuthCardConsentParagraph name="Sign up" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default SignUpPage;
