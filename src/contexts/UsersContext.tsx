import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    user: User
}

interface User {
    login: string
    avatar_url: string
    name: string
    bio: string
    company: string
    followers: number,
    profile_url: string 
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps){
    const [ user, setUser ] = useState<User>({} as User)

    async function loadDataUser(){
        const { data } = await api.get('/users/ericmesmo')

        const user = {
            avatar_url: data.avatar_url,
            login: data.login,
            company: data.company,
            followers: data.followers,
            name: data.name,
            bio: data.bio,
            profile_url: data.html_url
        }

        setUser(user)
    }

    useEffect(() => {
        loadDataUser()
    }, [])
    
    return (
        <UserContext.Provider
            value={{
                user
            }}
        >
            {children}
        </UserContext.Provider>
    )
}