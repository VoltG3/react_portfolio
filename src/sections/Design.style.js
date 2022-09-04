import styled from 'styled-components'

export const StyledSectionDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 57px 0 160px 0;
  background: var(--color-none);
`

export const StyledDesignCoversContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
  grid-template-rows: auto;
  gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
  // 100 200 300 400 500 600 700 800 900 000
    ". . . . A A A A A A A A A A A A . . . .";

  & div { background: var(--color-empty-frame); }
  & div:nth-child(1) { grid-area: A;  } // Video
`

export const StyledDesignCoversContainerExtension = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
  grid-template-rows: auto;
  gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
  // 100 200 300 400 500 600 700 800 900 000
    "A A A A A A A A A A A C C C C C C C C C"  // 1
    "A A A A A A A A A A A C C C C C C C C C"  // 1
    "B B B B B B B B B B B C C C C C C C C C"  // 2
    "B B B B B B B B B B B C C C C C C C C C"  // 2
    "D D D D D D D D D D D C C C C C C C C C"  // 3
    "D D D D D D D D D D D E E E E E E E E E"  // 3
    "D D D D D D D D D D D F F F F F F F F F"  // 4
    "D D D D D D D D D D D F F F F F F F F F"  // 4
    "G G G G G G G G G H H H H H H H H H H H"  // 5
    "G G G G G G G G G H H H H H H H H H H H"; // 5
  
  & div { background: var(--color-empty-frame); }
  & div:nth-child(1) { grid-area: A;  } // Book 
  & div:nth-child(2) { grid-area: B;  } // Tiket
  & div:nth-child(3) { grid-area: C;  } // Plakat LV100

  & div:nth-child(4) { grid-area: D;  } // Plakat Teater
  & div:nth-child(5) { grid-area: E;  } // 3D Modell
  & div:nth-child(6) { grid-area: F;  } // Plakat Japan

  & div:nth-child(7) { grid-area: G;  } // Postkort
  & div:nth-child(8) { grid-area: H;  } // Video
`
