"use client";
import { Header } from "@/modules/header";
import { SessionProvider, useSession } from "next-auth/react";

export default function Home() {
    return (
        <>
            <Header />
            <SessionProvider>
                <main>
                    <Maincomponent />
                </main>
            </SessionProvider>
        </>
    );
}

const Maincomponent = () => {
    const { data: session, } = useSession();
    console.table(session);
    return (
        <p>

        </p>
    )

}