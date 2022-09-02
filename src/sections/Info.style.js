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
`

export const StyledSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
      width: 1440px;
      height: 500px;
  
  div:nth-child(1) {
    padding: 20px 87px 0 87px;
  }

  div:nth-child(2) {
    padding: 20px 87px 0 87px;
  }
`
