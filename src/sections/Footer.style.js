import styled from 'styled-components'

export const StyledSectionFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: var(--display-width);
      height: 424px;
`

export const StyledFooterInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    width: 100%;
    height: 374px;
  background: var(--color-secondary);
  
  div:nth-child(1) {
    width: 923px;
    height: 324px;
    padding: 0 0 0 82px;
  }
  
  img {
      width: 47px;
      height: 50px;
    margin: 0 16px 55px 0;
    filter: var(--icon-filter-light);
           
  }
`

export const StyledFooterAttribution = styled.div`
  display: flex;
  justify-content: center;
      width: 100%;
      height: 50px;
  border-top: solid 1px var(--color-default);
  background: var(--color-secondary);
`
