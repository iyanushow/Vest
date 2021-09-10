import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
    margin: 0;
    padding: 0;
	}

`;
