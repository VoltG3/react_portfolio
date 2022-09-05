import styled from 'styled-components'

export const StyledSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    max-width: 1440px;
        width: var(--display-width);
        height: auto;
  padding: 0 0 var(--section-bottomPadding) 0;
  
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledInfoCellsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
    gap: var(--infoCell-gap);
  grid-template-areas:
  ". ."
  ". .";
  
  padding: 50px 87px 0 87px;
`
