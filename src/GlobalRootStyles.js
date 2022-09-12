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
    --section-sidePadding: 160px;
    --section-bottomPadding: 160px;
    --infoCell-width: 600px;
    --infoCell-gap: 64px;

   /* @media screen and (max-width: 992px) { 
      --display-width: 992px;
      --section-sidePadding: 0px;
      --section-bottomPadding: 30px;
      --infoCell-width: 380px;
      --infoCell-gap: 32px;
    }*/
    
    .borderbox {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  }


  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .btnArrowHover:hover {
    opacity: 0.3;
  }
`
