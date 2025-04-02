"use client";
import { Navbar } from "@/modules/navbar";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                <Link className="cursor-pointer" href="/">
                    <Image src={"icon/logo.svg"} alt="Logo" width={48} height={48} />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};
