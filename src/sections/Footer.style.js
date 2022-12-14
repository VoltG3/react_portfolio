import styled from 'styled-components'

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    max-width: var(--display-width);
        width: calc(100% - min(max(12.500vw, 40px), 180px));
        height: 100%;
  padding: 40px 0 40px 0;
  //border: solid 2px red;
`

export const StyledFooterContainerInner = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
    //max-width: var(--display-width);
        width: 100%;
        height: 100%;
  grid-template-areas: 
    "A . . D D"
    "B B B D D"
    "C . . D D";
  
  & div:nth-child(1) { grid-area: A; }
  & div:nth-child(2) { grid-area: B; }
  & div:nth-child(3) { grid-area: C; }
  & div:nth-child(4) { grid-area: D; }

 /* & div:nth-child(1) { border: solid 1px red; }
  & div:nth-child(2) { border: solid 3px white; }
  & div:nth-child(3) { border: solid 1px cornflowerblue; }*/


  .header {
    display: flex;
    align-items: flex-end;
  }
  
 .icons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    
    & div {
      display: flex;
      flex-direction: row;
    }
    
    & img {
      display: flex;
      flex-wrap: wrap;
        width: 40px;
        height: 40px;
      padding: 15px 15px 0 0;
      filter: var(--icon-filter-light);

      @media screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
   
   p {
     margin: 1px;
   }
  }
  
  @media screen and (max-width: 750px) {
    grid-template-areas:
    "A" "B" "D" "C";
  }
`
