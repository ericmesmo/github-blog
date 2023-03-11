import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

import { UserContext } from "../../contexts/UsersContext";


import { CardIssue, CardIssueHeader, CardText, IssueList, IssuesContainer } from "./styles";


export function Home() {
    const { issues } = useContext(UserContext)

    const navigate = useNavigate()

    return (
        <div>

            <Profile />

            <IssuesContainer>
                <SearchForm />

                <IssueList>
                    {issues.map(issue => {
                        return (
                            <CardIssue key={issue.id}>
                                <CardIssueHeader>
                                    <h3>{issue.title}</h3>
                                    <span>
                                        {formatDistanceToNow(issue.createdAt, {
                                            addSuffix: true, 
                                            locale: ptBR
                                        })}
                                    </span>
                                </CardIssueHeader>

                                <CardText onClick={() => navigate(`/post/${issue.number}`)}>
                                    <ReactMarkdown className="issue-body">{issue.body}</ReactMarkdown>
                                </CardText>
                            </CardIssue>
                        )
                    })}
                </IssueList>
            </IssuesContainer>
            
        </div>
    )
}