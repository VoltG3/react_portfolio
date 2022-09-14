import styled from 'styled-components'

export const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 880px;
    max-height: 310px;
        width: 100%;
        height: auto;
`

export const StyledHeaderLine = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
    max-width: 880px;
    max-height: 68px;
        width: 100%;
        height: min(max(4.722vw, 38px), 68px);
  margin-top: min(max(12.569vw, 120px), 181px);
  filter: var(--shadow-frame);
  background: var(--color-secondary);
`

export const StyledHeaderImg = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
    max-width: 265px;
    max-height: 260px;
        width: min(max(18.403vw, 180px), 265px);
        height: min(max(18.056vw, 180px), 260px);
  margin: 15px 0 0 47px;
  filter: var(--shadow-frame);
  background: var(--color-default);
  
  img {
      width: 100%;
      height: 100%;
    object-fit: cover;
    filter: grayscale(70%);
  }
`

export const StyledHeaderTextContent = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin-left: min(max(24.306vw, 270px), 350px);
  
  p:nth-child(1) { margin: 15px 0 10px 0; }
  p:nth-child(2) { margin: 0; }
  p:nth-child(3) { margin: 0; }
`
