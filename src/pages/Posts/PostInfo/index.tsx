import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/locale";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import { InfoHeader, InfoPost, PostInfoContainer } from "./styles";
import { useNavigate } from 'react-router-dom';

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

interface PostInfoProps {
    user: User,
    issue: Issue
}

export function PostInfo({ user, issue }: PostInfoProps){

    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1)
    }

    return (
        <PostInfoContainer>
            <div>
                <InfoHeader>
                    <a onClick={handleGoBack}>
                        <FontAwesomeIcon 
                            icon={faChevronLeft}
                        />
                        Voltar
                    </a>
                    <a href={issue.htmlUrl} target="_blank">
                        Ver no github
                        <FontAwesomeIcon 
                            icon={faArrowUpRightFromSquare}
                        />
                    </a>
                </InfoHeader>

                <h2>{issue.title}</h2>

                <InfoPost>
                    <div>
                        <FontAwesomeIcon 
                            icon={faGithub}
                        />
                        
                        <span>{user.login}</span>
                    </div>
                    
                    <div>
                        <FontAwesomeIcon 
                            icon={faCalendar}
                        />
                        
                        <span>
                            {formatDistanceToNow(issue.createdAt!, {
                                addSuffix: true,
                                locale: ptBR
                            })}
                        </span>
                    </div>
                    
                    <div>
                        <FontAwesomeIcon 
                            icon={faComment}
                        />
                        
                        <span>{issue.comments} comentários</span>
                    </div>
                </InfoPost>
            </div>            
        </PostInfoContainer>
    )
}