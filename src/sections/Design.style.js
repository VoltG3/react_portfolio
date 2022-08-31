import styled from 'styled-components'

export const StyledSectionDesignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 160px 0 160px 0;
  background: var(--color-none);
`
export const StyledDesignCoversContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
      gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
    ".";
 
  //border: solid 8px red;
`