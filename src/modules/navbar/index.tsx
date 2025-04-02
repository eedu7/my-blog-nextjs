"use client";

import { getCookie } from "cookies-next/client";
import Link from "next/link";
import { BellIcon, BookMarkedIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
    const [userEmail, setUserEmail] = React.useState<string | null>(null);

    React.useEffect(() => {
        setUserEmail(getCookie("_JWT_REFRESH_TOKEN") || null);
    }, []);

    if (!!userEmail) {
        return (
            <nav className="flex items-center space-x-4">
                <div>
                    <SearchIcon className="size-6 text-gray-400" />
                </div>
                <div>
                    <BookMarkedIcon className="size-6 text-gray-400" />
                </div>
                <div>
                    <BellIcon className="size-6 text-gray-400" />
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="p-2">
                            <DropdownMenuItem className="flex items-center space-x-2 p-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    {/* TODO: Add links */}
                                    <Link href="#" className="font-bold tracking-wider">
                                        Full Name
                                    </Link>
                                    <Link href="#">@username</Link>
                                </div>
                            </DropdownMenuItem>
                            <div className="text-gray-700">
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Write</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Library</DropdownMenuItem>
                                <DropdownMenuItem>Stories</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Refine recommendations</DropdownMenuItem>
                                <DropdownMenuItem>Manage publications</DropdownMenuItem>
                                <DropdownMenuItem>Help</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Apply to the Partner Program</DropdownMenuItem>
                                <DropdownMenuItem>Become a member</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
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
