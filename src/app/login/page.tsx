'use client';

import { useAuthContext } from "@/contexts/Auth/AuthContext";
import { useSignInMutation } from "@/graphql/generated/graphql";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function LogIn() {
    const [sigIn] = useSignInMutation()
    const { accessToken, logIn } = useAuthContext()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()

    useEffect(() => {
        if (accessToken) {
            router.push('/')
        }
    }, [accessToken, router])

    const handleLogIn = async (email: string, password: string) => {
        try {
            const { data } = await sigIn({
                variables: {
                    signInInput: {
                        email: email,
                        password: password
                    }
                }
            })

            if (data?.signIn?.accessToken) {
                logIn(data.signIn.accessToken)
                router.push('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <h1>LOGIN PAGE</h1>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => handleLogIn(email, password)}>LOGIN</button>
        </main>
    )
}
