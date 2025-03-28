import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="mx-auto mt-16 flex max-w-7xl justify-center p-1 md:mt-36 md:p-0">
            <section className="flex items-center justify-center">{children}</section>
        </main>
    );
};

export default AuthLayout;
