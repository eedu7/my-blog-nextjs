"use server"

import React from "react";
import { axiosClient } from "@/service/api";

export const Maincomponent = async () => {

    const [data, setData] = React.useState({
        email: "not found"
    })

    const getData = async () => {
        const response = await axiosClient.get("http://localhost:8000/v1/users/me")
        setData(() => response.data)
    }

    return (
        <p>
            {data.email} Hello World!
        </p>
    )

}