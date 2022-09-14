import styled from 'styled-components'

export const StyledSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
    max-width: var(--display-width);
        width: auto;
        height: auto;
  padding-bottom: min(max(11.111vw, 18px), 160px);
  background: var(--color-none);
`

export const StyledInfoCellsContainer = styled.div`
  display: flex;
  justify-content: center;
    max-width: 100vw;
        width: 100%;
`

export const StyledInfoCellsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 600px));
  grid-template-rows: repeat(2, auto);
  grid-auto-rows: auto; 
    gap: min(max(4.167vw, 22px), 45px);
      max-width: var(--display-width);
        width: auto; //calc(var(--display-width) - 80px);
  
  margin-top: 50px;
`
