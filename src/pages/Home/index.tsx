import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

import { CardIssue, CardIssueHeader, CardText, IssueList, IssuesContainer } from "./styles";

export function Home() {
    

    return (
        <div>

            <Profile />

            <IssuesContainer>
                <SearchForm />

                <IssueList>
                    <CardIssue>
                        <CardIssueHeader>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardIssueHeader>

                        <CardText>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                        </CardText>
                    </CardIssue>

                    <CardIssue>
                        <CardIssueHeader>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardIssueHeader>

                        <CardText>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                        </CardText>
                    </CardIssue>

                    <CardIssue>
                        <CardIssueHeader>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardIssueHeader>

                        <CardText>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
                        </CardText>
                    </CardIssue>
                </IssueList>
            </IssuesContainer>
            
        </div>
    )
}