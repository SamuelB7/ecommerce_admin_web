'use client';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null)

    const router = useRouter()

    useEffect(() => {
        if (!accessToken) {
            console.log('no access token')
            router.push('/login')
        }
    }, [accessToken])

    const logIn = (accessToken: string) => setAccessToken(accessToken)

    const logOut = () => setAccessToken(null)

    return (
        <AuthContext.Provider value={{ accessToken, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}