import React, { useState } from 'react'

export const Auth = () => {
    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })


    const onChange = (e) => {
        // console.log(e.target.value)
        setCreds({ ...creds, [e.target.type]: e.target.value })
    }

    const onSignUp = () => {
        fetch('https://mtutor-node-api.herokuapp.com/auth/',
            {
                method: 'PUT', // или 'PUT'
                body: JSON.stringify(creds), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <div>
            <h1>Sign up</h1>

            <label htmlFor="
            ">Email</label>
            <input value={creds.email} onChange={onChange} type="email" />
            <label htmlFor="
            ">Password</label>
            <input value={creds.password} onChange={onChange} type="password" />
            <button onClick={onSignUp}>sign up</button>
        </div>
    )
}