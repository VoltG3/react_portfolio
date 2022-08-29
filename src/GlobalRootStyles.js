import { createGlobalStyle } from 'styled-components'

export const GlobalRootStyles = createGlobalStyle`

    :root {
      --color-primary: #062C30;
      --color-secondary: #05595B;
      --color-accent: #E2D784;
      --color-default: #F5F5F5;
      --color-none: #FFFFFF;
      --color-link: 9281FD;
      
      --font-primary: 'Roboto Slab', sans;
      --font-secondary: 'Ubuntu', sans-serif;
      
      --shadow-foto: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.7));
    }
    
    ul { list-style-type: none; }
`
