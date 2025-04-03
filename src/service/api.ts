import axios from "axios";
import {getSession} from "next-auth/react";


export const axiosClient = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});