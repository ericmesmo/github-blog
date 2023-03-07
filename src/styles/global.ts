import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }

    a {
        font-weight: bold;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;

        color: ${props => props.theme.blue};

        display: flex;
        gap: 0.5rem;
        align-items: center;

        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
            transition: border-color 0.5s;
        }
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1rem;
    }
`
