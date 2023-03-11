import styled from "styled-components";

export const PostInfoContainer = styled.div`
    width: 100%;
    max-width: 1120px;

    margin: 0 auto;
    padding: 0 1.5rem;

    & > div {
        background-color: ${props => props.theme["base-profile"]};
        box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
        border-radius: 10px;

        padding: 2rem;

        margin-top: -5.5rem;

        display: flex;
        flex-direction: column;
    }
`

export const InfoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-bottom: 1.25rem;

    > a {
        font-weight: bold;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;

        color: ${props => props.theme.blue};

        display: flex;
        gap: 0.5rem;
        align-items: center;

        border-bottom: 1px solid transparent;

        cursor: pointer;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
            transition: border-color 0.5s;
        }
    }
`

export const InfoPost = styled.footer`
    display: flex;
    gap: 1.5rem;

    margin-top: 0.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > svg {
            width: 18px;
            height: 18px;
            color: ${props => props.theme["base-span"]};
        }

        > span {
            color: ${props => props.theme["base-span"]};
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`