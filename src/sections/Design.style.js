import styled from 'styled-components'

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1440px;
  height: auto;
  // border: solid 1px red;
  background: var(--color-none);

  div:nth-child(2) {
    display: flex;
    align-self: flex-end;
  }

  img {
    &:hover {
      opacity: 0.3;
      filter: var(--icon-filter-light);
    }
  }
`

export const StyledSectionDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 160px 0 57px 0;
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