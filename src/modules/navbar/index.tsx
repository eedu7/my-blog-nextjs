"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, BookMarkedIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import "./style.css";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
    // @typescript-eslint/no-unused-vars
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <AuthenticatedNavbar
                email={session?.user?.email as string}
                id={session?.user?.id as string}
                name={session?.user?.name as string}
                image={session?.user?.image as string}
            />
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

interface AuthenticatedNavbarProps {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
}

const AuthenticatedNavbar = ({ id, name, email, image }: AuthenticatedNavbarProps) => {
    return (
        <nav className="flex items-center space-x-4" id={id}>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle" className="cursor-pointer">
                    <SearchIcon className="search-icon size-6 text-gray-400 hover:text-gray-600" />
                </label>
                {/* TODO: Added search */}
                <input
                    className="rounded-xl border p-2"
                    placeholder="Search"
                    type="text"
                    id="search-input"
                />
            </div>
            {/* TODO: Add links */}

            <Link href="#" className="cursor-pointer">
                <BookMarkedIcon className="size-6 text-gray-400 hover:text-gray-600" />
            </Link>
            <Link href="#" className="cursor-pointer">
                <BellIcon className="size-6 text-gray-400 hover:text-gray-600" />
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger className="p-4">
                    <Avatar>
                        <AvatarImage src={image} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mx-4 mt-2 p-2">
                    <DropdownMenuItem className="flex items-center space-x-2 p-2">
                        <Avatar className="size-14 bg-rose-400">
                            <AvatarImage src={image} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            {/* TODO: Add links */}
                            <Link
                                href="#"
                                className="text-sm font-semibold tracking-wider hover:text-gray-600"
                            >
                                {name}
                            </Link>
                            <Link
                                href="#"
                                className="text-xm text-gray-600 underline-offset-2 transition-all hover:underline"
                            >
                                {/*TODO: Change this to username*/}
                                {email}
                            </Link>
                        </div>
                    </DropdownMenuItem>
                    <div className="text-gray-700">
                        {/* TODO: Add links to these */}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Write</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Library</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Stories</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
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
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={async () => {
                                await signOut();
                            }}
                        >
                            Sign out
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};
