import { createGlobalStyle } from 'styled-components'

export const GlobalRootStyles = createGlobalStyle`

  :root {
    --color-primary: #062C30;
    --color-secondary: #05595B;
    --color-accent: #E2D784;
    --color-default: #F5F5F5;
    --color-none: #FFFFFF;
    --color-link: #9281FD;
    --color-link-hover: #4a31e3;
    --color-hover-dev: red;
    --color-hover-design: yellow;
    --color-empty-frame: gray;

    --font-primary: 'Roboto Slab', sans;
    --font-secondary: 'Ubuntu', sans-serif;

    --shadow-frame: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.7));

    --icon-filter-dark: invert(25%) sepia(9%) saturate(6474%) hue-rotate(142deg) brightness(96%) contrast(96%);
    --icon-filter-light: invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%);
 
    --display-width: 1440px;
    --pagePaddingTop: min(max(30vw, 0px), 432px);
    --page-padding-top: min(max(3.958vw, 30px), 57px);
    --page-padding-right: 30px;
    --page-padding-bottom: min(max(11.111vw, 30px), 160px);
    --page-padding-left: 30px;
    
    .section--template {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        max-width: var(--display-width);
            width: 100%;
            height: auto;
    }
  }
  
  ul { list-style-type: none; }
  a { text-decoration: none; }

  .btnArrowHover:hover {
    opacity: 0.3;
  }

  @media only screen and (max-width: 992px) {
    :root {
      --pagePaddingTop: 0px;
    }
  }
`
