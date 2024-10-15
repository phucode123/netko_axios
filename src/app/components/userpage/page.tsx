"use client";
import { api, useAxiosInterceptor } from "@/utils/axiosRequest";
import { decodeToken } from "@/utils/jwt";
import { fetchUserData, refreshToken } from "@/utils/methodAPI";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
    firstName: string;
    image: string;
}

function Userpage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [notif, setNotif] = useState('');
    const [index, setIndex] = useState(0)
    let token = localStorage.getItem("accessToken");
    useAxiosInterceptor(setLoading);
    useEffect(() => {
        if (token) {
            const getUserData = async () => {
                if (token) {
                    const resp = await fetchUserData(token);
                    setUser(resp)
                    const decode = decodeToken(token)
                    setIndex(decode)
                }
            };
            getUserData();
        }
        else if (!token) {
            router.push('/login');
        }
    }, [token]);

    useEffect(() => {
        const updateRemainingTime = () => {
            const currentTime = Math.floor(Date.now() / 1000);
            const remaining = index - currentTime;
            if (remaining > 0) {
                const minutes = Math.floor(remaining / 60);
                const seconds = remaining % 60;
                setNotif(`còn ${minutes} phút và ${seconds} giây`);
            } else {
                setNotif('Token đã hết hạn');
            }
        };
        const intervalId = setInterval(updateRemainingTime, 1000);
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div className="flex items-center w-3/4 mx-auto flex-col bg-slate-100">
            {loading && <div className="loading-bar">Loading...</div>}
            <div className="flex flex-row w-full px-7">
                {user ? (
                    <div className="flex flex-row justify-between w-full text-end">
                        <div className="my-3 flex items-center flex-row">
                            <div className="avatar border">
                                <img src={user.image}>

                                </img>
                            </div>
                            <div className="ml-2">{user.firstName}</div>
                        </div>
                        <div className="h-full items-end flex">
                            <p className="text-sm text-orange-300">{notif}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {notif}
                    </div>
                )}
            </div>
            <div className="flex">
                <button onClick={() => {
                    refreshToken()
                }} className="py-2 px-4 bg-indigo-300 rounded-xl">
                    Làm mới
                </button>
            </div>
        </div>
    );
}

export default Userpage;
