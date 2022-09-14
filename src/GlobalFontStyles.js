import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  
    .sectionHeader-textline-header-firstpart {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(2.778vw, 24px), 40px);
          line-height: min(max(3.681vw, 18px), 40px);
      color: var(--color-primary);

      @media screen and (max-width: 480px) {
        font-weight: 300;
        font-size: 22px;
      }
    }
    
    .sectionHeader-textline-header-secondpart {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(2.500vw, 22px), 36px);
          line-height: min(max(3.264vw, 22px), 40px);
      color: var(--color-primary);

      @media screen and (max-width: 480px) {
        font-weight: 300;
        font-size: 18px;
      }
    }

    .sectionHeader-textline-subheader {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 300;
          font-size: min(max(2.222vw, 22px), 32px);
          line-height: min(max(2.917vw, 18px), 40px);
      padding: 0 26px 0 0;
      color: var(--color-none);
      text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.7);
    }
    
    .sectionInfo-textline-textcontent {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(1.806vw, 18px), 26px);
          line-height: min(max(2.500vw, 22px), 36px);
          letter-spacing: 0.02em;
      padding-right: min(max(6.042vw, 40px), 87px);
      padding-left: min(max(6.042vw, 40px), 87px);
      //padding: 0 87px 0 87px;
      color: var(--color-primary);
    }
    
    .sectionInfo-textline-subsection-infocell-header {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 600;
          font-size: min(max(1.806vw, 18px), 26px);
          line-height: min(max(2.361vw, 18px), 34px);
          letter-spacing: 0.02em;
      text-align: center;
      margin: 5px 0 5px 0;
      color: var(--color-primary);
    }

    .sectionInfo-textline-subsection-infocell-textcontent {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(1.806vw, 18px), 26px);
          line-height: min(max(2.361vw, 18px), 34px);
          letter-spacing: 0.02em;
          margin: 5px 15px 5px 15px;
      color: var(--color-primary);
    }
    
    .sectionInfo-infocell-link {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 600;
          font-size: min(max(1.806vw, 18px), 26px);
          line-height: min(max(2.361vw, 18px), 34px);
          letter-spacing: 0.02em;
      margin: 5px 15px 5px 15px;
      color: var(--color-link);
    } .sectionInfo-infocell-link:hover {
      color: var(--color-link-hover);
      }
    
    .sectionFooter-textline-header {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(1.806vw, 16px), 26px);
          letter-spacing: 0.02em;
      margin: 0;
      color: var(--color-none);
    }
    
    .sectionFooter-textline-credentials {
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(1.389vw, 16px), 20px);
          line-height: min(max(1.806vw, 16px), 26px);
          letter-spacing: 0.04em;
      color: var(--color-none);
    } .sectionFooter-textline-credentials a { color: var(--color-none); }
      .sectionFooter-textline-credentials a:hover { color: var(--color-primary); }

    .sectionFooter-textline-list {;
      font-family: var(--font-primary);
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 21px;
          letter-spacing: 0.02em;
      color: var(--color-none);
    }
    
    .sectionFooter-textline-html-credentials {
      font-family: var(--font-primary); 
          font-style: normal;
          font-weight: 300;
          font-size: min(max(1.111vw, 12px), 16px);
          line-height: 21px;
      text-align: center;
      color: var(--color-default);
    }
    
    .linkFrame-textline {
      font-family: var(--font-secondary);
          font-style: normal;
          font-weight: 400;
          font-size: min(max(1.389vw, 16px), 20px);
          letter-spacing: 0.02em;
      padding-left: 30px;
    }
`
