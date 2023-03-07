import styled from "styled-components";

export const IssuesContainer = styled.section`
    width: 100%;
    max-width: 1120px;

    margin: 4.5rem auto 0;

    padding: 0 1.5rem;
`

export const IssueList = styled.div`
    margin-top: 2.875rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardIssue = styled.a`
    background: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    cursor: pointer;

    border: 2px solid transparent;

    &:hover {
        border: 2px solid ${props => props.theme["base-label"]};
        transition: border-color 0.5s;
    }
`

export const CardIssueHeader = styled.header`
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    > h3 {
        color: ${props => props.theme["base-title"]};
        font-weight: bold;
        font-size: 1.25rem;
        text-transform: none;       
    }

    > span {
       font-size: 0.875rem;
       font-weight: 400;
       color: ${props => props.theme["base-span"]};
       text-transform: none;
    }
`

export const CardText = styled.div`
    p {
        color: ${props => props.theme["base-text"]};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* número máximo de linhas */
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;

        text-transform: none;
        font-weight: 400;
        font-size: 1rem;
    }
`