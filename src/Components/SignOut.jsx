import React from "react";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { authentication } from "../Firebase";

export const SignOut = () => {
    const navigate = useNavigate()

    const HandleSignOut = async () => {
        await signOut(authentication)
        navigate('/signin')
    }

    return <button onClick={HandleSignOut}>Sign Out</button>
}
