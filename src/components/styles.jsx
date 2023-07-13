import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        background-color: #ecf0f1;
        font-family: Roboto, sans-serif;
        color: #2d3436;
        input 
        {
            display: block;
            margin: 16px auto 0;
            font-size: 2em;
            max-width: 120px;
            border: none;
            background-color: transparent;
            text-align: center;
            color: #2c3e50;
            border-bottom: 6px solid #2c3e50;
        };
        h1 {
            font-size: 3em;
            text-align: center;
        }
    }`

    export default GlobalStyle