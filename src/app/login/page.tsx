"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {api} from "@/utils/axiosRequest";
import { loginData } from "@/utils/methodAPI";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const routers = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const checkLogin = async ()=>{
            let dataLogin:any = await loginData({
                username: username,
                password: password,
                expiresInMins: 30
            })
            if (dataLogin.status == 200) {
                console.log(dataLogin);
                localStorage.setItem('accessToken', dataLogin.data.accessToken);
                localStorage.setItem('refreshToken', dataLogin.data.refreshToken);
                routers.push('/components/userpage');
            }
        }
        checkLogin()
    };
    return (
        <div className="w-96 mx-auto flex items-center justify-center min-h-screen">
            <div className="container_form  w-full border border-white hover:border-inherit p-5 bg-emerald-100">
                <header className="mb-6">
                    <div className="text-center">
                        <h3 className="uppercase font-bold text-xl">
                            logo
                        </h3>
                    </div>
                </header>
                <div>
                    <h3 className="uppercase mb-3 font-bold">
                        Login
                    </h3>
                    <form onSubmit={handleSubmit} className=" flex flex-col w-full justify-between">
                        <div className="flex flex-row justify-between items-center mb-1">
                            <span className="">Username</span>
                            <input className="p-2 text-sm" type="text" placeholder="username..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className="title_input_login">
                            <span>Password</span>
                            <input className="p-2 text-sm" type="password" placeholder="pass..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <a href="#" className="text-xs text-end underline text-red-300 hover:text-red-400">Forgot password?</a>
                        <button className="bg-lime-200 m-3 mx-9 p-2 hover:bg-lime-300" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;