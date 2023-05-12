import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Admin.module.css";

const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [verifPassword, setVerifPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const Register = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/business/auth/register', {
                email, username, password, verifPassword
            })
            navigate('/auth/login')
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
                                {!message ? 'Form Pendaftaran' : message}
                            </span>
                        </div>
                        <div>
                            <form onSubmit={Register}>
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4">
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
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4">
                                    <label
                                        htmlFor="username"
                                        className="font-bold text-slate-800 tracking-wider">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="block w-full p-2 rounded-md border border-red-400 focus:outline-blue-300"
                                        placeholder="Enter your username..."
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4">
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
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4">
                                    <label
                                        htmlFor="password2"
                                        className="font-bold text-slate-800 tracking-wider">Verify Password</label>
                                    <input
                                        type="password"
                                        name="password2"
                                        id="password2"
                                        className="block w-full p-2 rounded-md border border-red-400 focus:outline-blue-300"
                                        placeholder="Verify your password..."
                                        value={verifPassword}
                                        onChange={e => setVerifPassword(e.target.value)} />
                                </div>
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4 flex">
                                    <button
                                        className="block w-3/4 p-2 rounded-tl-md rounded-bl-md border border-red-400 text-slate-50 bg-red-500 font-bold tracking-wider uppercase hover:bg-rose-800 active:bg-red-600">Sign Up</button>
                                    <span className="block w-1/4 p-2 rounded-tr-md rounded-br-md border text-center font-bold underline">Atau</span>
                                </div>
                                <div className="shadow-lg rounded-lg mt-2 p-3 bg-rose-300 mx-4 flex justify-between">
                                    <Link to={"/auth/forgot"} className="shadow-md p-2 rounded-md bg-rose-400 font-semibold text-slate-50 hover:bg-red-800 active:bg-red-600">Forgot Password</Link>
                                    <Link to={"/auth/login"} className="shadow-md p-2 rounded-md bg-rose-400 font-semibold text-slate-50 hover:bg-red-800 active:bg-red-600">Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Register;
