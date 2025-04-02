"use client";

import { getCookie } from "cookies-next/client";
import Link from "next/link";
import { BellIcon, BookMarkedIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
    const userEmail = getCookie("_AUTH_USER_EMAIL");

    if (!!userEmail) {
        return (
            <nav>
                <div>
                    <SearchIcon />
                </div>
                <div>
                    <BookMarkedIcon />
                </div>
                <div>
                    <BellIcon />
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="space-x-4 text-sm text-green-800">
                <Link href="/auth/sign-in" className="underline-offset-4 hover:underline">
                    Sign in
                </Link>
                <Link href="/auth/sign-up" className="rounded-4xl border border-green-800 p-2">
                    Get started
                </Link>
            </nav>
        );
    }
};
