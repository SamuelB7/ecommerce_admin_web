import { createContext, useContext } from "react";


type AuthContext = {
    accessToken?: string | null;
    logIn: (accessToken: string) => void;
    logOut: () => void;
}

export const AuthContext = createContext<AuthContext>({
    accessToken: null,
    logIn: () => null,
    logOut: () => null
})

export const useAuthContext = () => useContext(AuthContext)