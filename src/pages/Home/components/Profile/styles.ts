import styled from "styled-components";

export const ProfileContainer = styled.main`
    width: 100%;
    max-width: 1120px;

    margin: 0 auto;
    padding: 0 1.5rem;

    > div {
        display: flex;
        gap: 2rem;

        background: ${props => props.theme["base-profile"]};

        border-radius: 10px;

        box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

        padding: 2rem;

        margin-top: -5.5rem;

        > img {
            width: 148px;
            size: 148px;

            border-radius: 8px;
        }

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    
`

export const ProfileInfoContainer = styled.div`
    width: 100%;

    > p {
        color: ${props => props.theme["base-text"]};

        margin-top: 0.5rem;
    };
`

export const ProfileInfoHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > h2 {
        line-height: 1.3;
    }
`

export const InfoProfile = styled.div`
    display: flex;
    gap: 1.5rem;

    margin-top: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > svg {
            width: 18px;
            height: 18px;
        }

        > span {
            color: ${props => props.theme["base-subtitle"]};
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`