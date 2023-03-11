import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    user: User,
    issue: Issue | undefined,
    issues: Issue[],
    isLoading: boolean,
    searchIssueInRepo: (search: string) => void
    getIssue: (postId: Number) => void
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

interface Issue {
    id: number
    number: number
    title: string
    body: string
    comments: number
    htmlUrl: string
    createdAt: Date
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps){
    const [ user, setUser ] = useState<User>({} as User)
    const [ issues, setIssues ] = useState<Issue[]>([])
    const [ issue, setIssue ] = useState<Issue>({} as Issue);
    const [ isLoading, setIsLoading ] = useState(true);

    async function searchIssueInRepo(search:string) {
        const { data } = await api.get(`/search/issues?q=${encodeURI(search)}%20repo:ericmesmo/github-blog`)

        const issue = data.items.map((item: { id: any; number: any; title: any; body: any; comments: any; html_url: any; created_at: any; }) => {
            return {
                id: item.id,
                number: item.number,
                title: item.title,
                body: item.body,
                comments: item.comments,
                htmlUrl: item.html_url,
                createdAt: new Date(item.created_at)
            }
        })

        setIssues(issue)
    }

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

    async function getIssue(postId: Number){
        const IssueAux = issues.find(item => item.number === postId)
        if(IssueAux){
            setIssue(IssueAux)
        }
        setIsLoading(false)
    }
    
    return (
        <UserContext.Provider
            value={{
                user,
                issues,
                issue,
                isLoading,
                searchIssueInRepo,
                getIssue,

            }}
        >
            {children}
        </UserContext.Provider>
    )
}