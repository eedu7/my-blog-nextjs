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
import { SIGN_UP_LINK } from "@/data/navigation-links";
import { AuthCardConsentParagrapht } from "@/modules/authentication/components/auth-card-consent";
import { useReactForm } from "@/modules/authentication/hooks/useReactForm";

const SignInPage = () => {
    const { loginForm } = useReactForm();
    return (
        <Card className="md:w-96">
            <CardHeader>
                <CardTitle>Welcome Back!</CardTitle>
                <CardDescription>
                    Sign in to continue reading and writing on MyBlog.
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
                    <loginForm.Field
                        name="email"
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
                                            {/* {field.state.meta.errors
												.map((err) => err?.message)
												.join(", ")} */}
                                            {field.state.meta.errors[0]?.message}
                                        </em>
                                    )}
                                </div>
                            </div>
                        )}
                    />
                    <loginForm.Field
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
                        <Link className="float-end text-xs text-blue-800" href={SIGN_UP_LINK.href}>
                            Don&apos;t have an account? Register here
                        </Link>
                    </div>
                    <Button
                        variant="default"
                        className="w-full cursor-pointer"
                        onClick={() => loginForm.handleSubmit()}
                    >
                        Sign In
                    </Button>
                    <AuthCardConsentParagrapht />
                </div>
            </CardFooter>
        </Card>
    );
};

export default SignInPage;
