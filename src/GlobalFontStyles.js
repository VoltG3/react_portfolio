import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  
    .sectionHeader-textline-header-firstpart {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 53px;
      color: var(--color-primary);
    }
    
    .sectionHeader-textline-header-secondpart {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 47px;
      color: var(--color-primary);
    }

    .sectionHeader-textline-subheader {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 300;
          font-size: 32px;
          line-height: 42px;
      padding: 0 26px 0 0;
      color: var(--color-none);
      text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.7);
    }
    
    .sectionInfo-textline-textcontent {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 36px;
          letter-spacing: 0.04em;
      padding: 0 87px 0 87px;
      color: var(--color-primary);
    }
    
    .sectionInfo-textline-subsection-textcontent {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 34px;
          letter-spacing: 0.02em;
      color: var(--color-primary);
    }
    
    .sectionFooter-textline-header {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          letter-spacing: 0.02em;
      margin: 20px 0 16px 0;
      color: var(--color-none);
    }

    .sectionFooter-textline-credentials {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.04em;
      color: var(--color-none);
    }

    .sectionFooter-textline-list {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.02em;
      color: var(--color-none);
    }

    .sectionFooter-textline-html-credentials {
      font-family: var(--font-primary); 
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 21px;
      color: var(--color-default);
    }
    
    .linkFrame-textline-light {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.02em;
      padding-left: 30px;
      //color: var(--color-none);
      //text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .linkFrame-textline-dark {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.02em;
      padding-left: 30px;
      //color: var(--color-secondary);
      //text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.7);
    }
`
