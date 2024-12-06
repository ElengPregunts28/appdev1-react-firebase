import React, { useState } from "react"
import { Link } from 'react-router'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router"
import { googleProvider, authentication } from "../Firebase"

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(authentication, email, password)
            navigate('/')
        } catch (error) {
            setError(`Error: ${error}`)
        }
    }

    const handleSignInWithGmail = async () => {
        try {
            await signInWithPopup(authentication, googleProvider)
            navigate('/')
        } catch (error) {
            setError(`Error: ${error}`)
        }
    }


    return (
      <div>
        <h1>Sign In</h1>
        <input type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}/> <br />
        <input type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/> <br />
        <button onClick={handleSignIn}>Sign In</button> <br />
        { 'or' } <br />
        <button onClick={handleSignInWithGmail}>Sign In with your Gmail</button>
        {error && <p>{error}</p>}
        <p>Don't have account yet? <Link to = "/SignUp">SignUp</Link></p>
      </div>
    )
}

