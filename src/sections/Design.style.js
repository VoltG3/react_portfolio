import styled from 'styled-components'

export const StyledSectionDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    max-width: var(--display-width);
        width: 100%;
        height: auto;
  padding: 57px 0 160px 0;
  background: var(--color-none);
`

export const StyledDesignCoversContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 30px;
  
  & div { background: var(--color-empty-frame); }
  //& div:nth-child(1) img { max-width: 1440px; width: 100%; max-height: 600px; height: 100%; } // Video
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
  & div:nth-child(1) { grid-area: A;  } & div:nth-child(1) img { width: 550px; height: 350px; } // Book 
  & div:nth-child(2) { grid-area: B;  } & div:nth-child(2) img { width: 550px; height: 200px; } // Tiket
  & div:nth-child(3) { grid-area: C;  } & div:nth-child(3) img { width: 450px; height: 781px; } // Plakat LV100

  & div:nth-child(4) { grid-area: D;  } & div:nth-child(4) img { width: 550px; height: 781px; } // Plakat Teater
  & div:nth-child(5) { grid-area: E;  } & div:nth-child(5) img { width: 450px; height: 300px; } // 3D Modell
  & div:nth-child(6) { grid-area: F;  } & div:nth-child(6) img { width: 450px; height: 250px; } // Plakat Japan

  & div:nth-child(7) { grid-area: G;  } & div:nth-child(7) img { width: 450px; height: 350px; } // Postkort
  & div:nth-child(8) { grid-area: H;  } & div:nth-child(8) img { width: 550px; height: 350px; } // Video
`
