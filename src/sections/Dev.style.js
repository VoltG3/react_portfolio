import styled from 'styled-components'

export const StyledSectionDevContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
      width: 1440px;
      height: auto;
  padding: 57px 0 160px 0;
  background: var(--color-secondary);
`

export const StyledDevCoversContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
  grid-template-rows: auto;
  gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
  // 100 200 300 400 500 600 700 800 900
    "A A A A A A A A A A C C C C C C C C"
    "B B B B B B B B B B C C C C C C C C";
  
  & div { background: var(--color-empty-frame); }
  & div:nth-child(1) { grid-area: A;  } // Vanilla JS - Array
  & div:nth-child(2) { grid-area: B;  } // Figma - Space
  & div:nth-child(3) { grid-area: C;  } // HTML - FrontEndMentor
`

export const StyledDevCoversContainerExtension = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
  grid-template-rows: auto;
      gap: 30px;
  width: auto;
  height: auto;
  //grid-auto-flow: row;
  grid-template-areas:
  // 100 200 300 400 500 600 700 800 900
    "A A A A A A A A A A C C C C C C C C"
    "B B B B B B B B B B C C C C C C C C"
    "D D D D D D D D E E E E E E E E E E"
    "D D D D D D D D F F F F F F F F F F"
    "G G G G G G G G G H H H H H H H H H"
    "I I I I I I I I I J J J J J J J J J"
    "K K K K K K K K K K K K K L L L L L";

  & div { background: var(--color-empty-frame); }
  & div:nth-child(1) { grid-area: A;  } // Vanilla JS - Array
  & div:nth-child(2) { grid-area: B;  } // Figma - Space
  & div:nth-child(3) { grid-area: C;  } // HTML - FrontEndMentor
  
  & div:nth-child(4) { grid-area: D;  } // HTML - Blog
  & div:nth-child(5) { grid-area: E;  } // Figma - Blogr
  & div:nth-child(6) { grid-area: F;  } // C++ OOP - Date & Time
  
  & div:nth-child(7) { grid-area: G;  } // HTML - Restaurant
  & div:nth-child(8) { grid-area: H;  } // React - FakeStore
  & div:nth-child(9) { grid-area: I;  } // PHP - Blog
  & div:nth-child(10) { grid-area: J; } // C++ / Sorterings Algoritmer

  & div:nth-child(11) { grid-area: K; } // Vanilla JS / PHP / API
  & div:nth-child(12) { grid-area: L; } // React - Calc
`
