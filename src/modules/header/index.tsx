"use client"
import { Navbar } from "@/modules/navbar";

export const Header = () => {
    return (
        <header>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                <div>
                    <h1 className="text-bold text-4xl text-purple-900">MyBlog</h1>
                </div>
                <Navbar />
            </div>
        </header>
    );
};
