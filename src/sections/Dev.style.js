import styled from 'styled-components'

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
    width: 1440px;
    height: auto;
  // border: solid 1px red;
  background: var(--color-secondary);
  
  div:nth-child(2) {
    display: flex;
    align-self: flex-end;
  }
`

export const StyledSectionDevContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 160px 0 57px 0;
  background: var(--color-secondary);
  //border: solid 4px red;
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
  //border: solid 8px red;
`
