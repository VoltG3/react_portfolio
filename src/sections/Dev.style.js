import styled from 'styled-components'

export const StyledSectionDevContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 57px 0 160px 0;
  background: var(--color-secondary);
`

export const StyledDevCoversContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
      gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". .";
  
  & div:nth-child(3) { grid-row: 1 / 3; grid-column: 2 / 3; }
`
