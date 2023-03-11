import { useContext, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

import { UserContext } from "../../contexts/UsersContext";

import { PostInfo } from "./PostInfo";

import { ContentContainer } from "./styles";

export function Posts() {
    const { user, issue, isLoading, getIssue } = useContext(UserContext)

    
    const { postId } = useParams();

    
    useEffect(() => {
        getIssue(Number(postId))
    }, [])

    return (
        
        <div>
            {
                !isLoading ? 
                    <div>
                        <PostInfo
                            user={user}
                            issue={issue!}
                        />

                        <ContentContainer>
                            <ReactMarkdown 
                                className="content"
                                children={issue?.body!}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeKatex]}
                            />
                        </ContentContainer>
                    </div>
                :   
                <></>
            }
        </div>
    )
}