import React from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const laravel_login = "http://localhost:8000/api/login";
    const [textEmail, settextEmail] = useState("");
    const [textpassword, setextpassword] = useState("");

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        settextEmail(value);
    };
    const handleChangePassword = (e) => {
        const value = e.target.value;
        setextpassword(value);
    };
    const [csrfToken, setcsrfToken] = useState("");

    const requestLogin = async (e) => {
        e.preventDefault();
        console.log(textEmail);
        console.log(textpassword);
        const formData = new FormData();
        formData.append("email", textEmail);
        formData.append("password", textpassword);


        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(async () => {
            axios
                .post(laravel_login, formData, {
                    headers: {
                        Accept: "application/json"
                    },
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error.status);
                });
        });

    };
    return (
        <div id='login' className='login'>
            <div className='section_padding'>
                <div className='login_heading'>
                    <h1>Login</h1>
                </div>
                <div className='login_content'>
                    <p>Email</p>
                    <input
                        type="text"
                        value={textEmail}
                        placeholder='Email address'
                        onChange={(e) => handleChangeEmail(e)}

                    />
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        value={textpassword}
                        onChange={(e) => handleChangePassword(e)}
                        id="" />
                </div>
                <div className='login_btn'>
                    <button onClick={(e) => requestLogin(e)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;