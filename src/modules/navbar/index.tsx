"use client";

import { getCookie } from "cookies-next/client";
import Link from "next/link";
import { BellIcon, BookMarkedIcon, Search, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "./style.css";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [userEmail, setUserEmail] = React.useState<string | null>(null);
    const [toggle, setToggle] = React.useState<boolean>(false);

    React.useEffect(() => {
        setUserEmail(getCookie("_JWT_REFRESH_TOKEN") || null);
    }, []);

    if (!!userEmail) {
        return (
            <nav className="flex items-center space-x-4">
                {/* TODO: Add links */}

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="toggle" />
                    <label htmlFor="toggle">
                        <SearchIcon className="search-icon size-6 text-gray-400 hover:text-gray-600" />
                    </label>
                    <input
                        className="rounded-xl border p-2"
                        placeholder="Search"
                        type="text"
                        id="search-input"
                    />
                </div>
                <Link href="#" className="cursor-pointer">
                    <BookMarkedIcon className="size-6 text-gray-400 hover:text-gray-600" />
                </Link>
                <Link href="#" className="cursor-pointer">
                    <BellIcon className="size-6 text-gray-400 hover:text-gray-600" />
                </Link>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mx-4 mt-2 p-2">
                            <DropdownMenuItem className="flex items-center space-x-2 p-2">
                                <Avatar className="size-14 bg-rose-400">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-1">
                                    {/* TODO: Add links */}
                                    <Link
                                        href="#"
                                        className="text-sm font-semibold tracking-wider hover:text-gray-600"
                                    >
                                        Full Name
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-sm tracking-widest text-gray-600 underline-offset-2 transition-all hover:underline"
                                    >
                                        @username
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                            <div className="text-gray-700">
                                {/* TODO: Add links to these */}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    Write
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    Library
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    Stories
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    Refine recommendations
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    Manage publications
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Help</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    Apply to the Partner Program
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    Become a member
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    Sign out
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
