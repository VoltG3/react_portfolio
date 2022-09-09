import styled from 'styled-components'

export const StyledSectionHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    max-width: 1440px;
        width: var(--display-width);
        height: 500px;
  border-bottom: solid 1px var(--color-default);
  background: var(--color-none);
`

export const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
    width: 880px;
    height: 310px;
`

export const StyledHeaderLine = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
    width: 880px;
    height: 68px;
  margin: 191px 0 0 0;
  filter: var(--shadow-frame);
  background: var(--color-secondary);
`

export const StyledHeaderImg = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: center;
  align-items: center;
    width: 280px;
    height: 280px;
  margin: 15px 0 0 47px;
  filter: var(--shadow-frame);
  background: var(--color-default);
  
  img {
      width: inherit;
      height: inherit;
    object-fit: cover;
  }
`

export const StyledHeaderTextContent = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
  flex-direction: column;
  margin-left: 350px;
  
  p:nth-child(1) { margin: 15px 0 10px 0; }
  p:nth-child(2) { margin: 0; }
  p:nth-child(3) { margin: 0; }
`
