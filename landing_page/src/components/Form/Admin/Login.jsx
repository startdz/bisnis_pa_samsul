import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Admin.module.css";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const Login = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/business/auth/login', {
                email, password
            })
            navigate('/project/admin/dashboard')
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
    }

    return (
        <React.Fragment>
            <section className="w-full h-full bg-rose-500">
                <div className="max-w-md h-screen bg-rose-500 mx-auto p-8">
                    <div className="w-full h-full bg-red-400 rounded-lg">
                        <div className="w-full h-12 bg-red-700 flex justify-center items-center rounded-t-lg">
                            <span className="font-bold text-slate-100">
                                {!message ? 'Form Login' : message}
                            </span>
                        </div>
                        <div className="shadow-lg rounded-b-lg w-full h-3/4 flex justify-center items-center">
                            <form onSubmit={Login}>
                                <div className="shadow-lg rounded-lg mt-2 p-5 bg-rose-300">
                                    <label
                                        htmlFor="email"
                                        className="font-bold text-slate-800 tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full p-2 rounded-md border border-red-400 focus:outline-blue-300"
                                        placeholder="Enter your email..."
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                               
                                <div className="shadow-lg rounded-lg mt-2 p-5 bg-rose-300">
                                    <label
                                        htmlFor="password"
                                        className="font-bold text-slate-800 tracking-wider">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="block w-full p-2 rounded-md border border-red-400 focus:outline-blue-300"
                                        placeholder="Enter your password..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </div>
                               
                                <div className="shadow-lg rounded-lg mt-2 p-5 bg-rose-300 flex">
                                    <button
                                        className="block w-3/4 p-2 rounded-tl-md rounded-bl-md border border-red-400 text-slate-50 bg-red-500 font-bold tracking-wider uppercase hover:bg-rose-800 active:bg-red-600">Sign In</button>
                                    <span className="block w-1/4 p-2 rounded-tr-md rounded-br-md border text-center font-bold underline">Atau</span>
                                </div>
                                <div className="shadow-lg rounded-lg mt-2 p-5 bg-rose-300 flex justify-between">
                                    <Link to={"/auth/register"} className="shadow-md p-2 rounded-md bg-rose-400 font-semibold text-slate-50 hover:bg-red-800 active:bg-red-600">Register</Link>
                                    <Link to={"/auth/forgot"} className="shadow-md p-2 rounded-md bg-rose-400 font-semibold text-slate-50 hover:bg-red-800 active:bg-red-600">Lupa Password</Link>
                                </div>
                            </form>
                        </div>
                        <div className="p-4 text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi doloremque eum laboriosam corporis, maxime praesentium.
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login