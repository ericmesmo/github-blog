import styled from "styled-components";

import background from '../../assets/background-header.svg'

export const HeaderContainer = styled.header`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 0 8.375rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const BackgroundEffects = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: 1.875;
`
