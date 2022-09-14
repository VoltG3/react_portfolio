import styled from 'styled-components'

export const StyledSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
    max-width: var(--display-width);
        width: auto;
        height: auto;
  padding-bottom: min(max(1.389vw, 18px), 20px);
  background: var(--color-none);
`

export const StyledInfoCellsContainer = styled.div`
  display: flex;
  justify-content: center;
    width: var(--display-width);
    height: auto;
  padding-bottom: min(max(11.111vw, 18px), 160px);
`

export const StyledInfoCellsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 600px));
  grid-template-rows: repeat(2, auto);
  grid-auto-rows: auto; 
    gap: min(max(4.167vw, 22px), 45px);
      max-width: var(--display-width);
        width: auto;
  margin-top: 50px;
  
  @media screen and (max-width: 1440px) {
   max-width: 600px;
  }

  @media screen and (max-width: 480px) {
    max-width: 280px;
    
    .media460px {
      flex-direction: column!important;
    }
    
    #media460px {
      margin-left: 16px!important;
    }
  }
`
