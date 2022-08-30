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
      
      --icon-filter-dark: invert(25%)
                          sepia(9%)
                          saturate(6474%)
                          hue-rotate(142deg)
                          brightness(96%)
                          contrast(96%);
    }
    
    ul { list-style-type: none; }
`
