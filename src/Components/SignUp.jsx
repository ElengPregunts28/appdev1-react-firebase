import React, {useState} from "react";
import { Link } from 'react-router'
import { authentication } from "../Firebase";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(authentication, email, password)
            navigate('/')
        } catch (error) {
            setError(`Error: ${error}`)
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <input type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}/> <br />
            <input type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/> <br /> 
            <button onClick={handleSignUp}>Sign Up</button> <br />
            {error && <p>{error}</p>}
            <p>Already have account? <Link to = "/SignIn">Sign In</Link></p>
        </div>
    )
}