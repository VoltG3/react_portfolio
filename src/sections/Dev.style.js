import styled from 'styled-components'

export const StyledDevLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
    gap: 30px;
  width: auto;
  height: auto;
  grid-template-areas:
    "A A A A A A A A A A C C C C C C C C"
    "B B B B B B B B B B C C C C C C C C";
  
      padding: var(--page-padding-top)
               var(--page-padding-right)
               var(--page-padding-bottom)
               var(--page-padding-right);
  
  & div { background: var(--color-empty-frame); }
  & div:nth-child(1) { grid-area: A;  } // Vanilla JS - Array
  & div:nth-child(2) { grid-area: B;  } // Figma - Space
  & div:nth-child(3) { grid-area: C;  } // HTML - FrontEndMentor

  @media screen and (max-width: 750px) {
    grid-template-areas:
    "A" "B" "C";

    & div {
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }
`

export const StyledDevLayoutExtension = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
    gap: 30px;
  width: auto;
  height: auto;
  grid-template-areas:
    "A A A A A A A A A A C C C C C C C C"
    "B B B B B B B B B B C C C C C C C C"
    "D D D D D D D D E E E E E E E E E E"
    "D D D D D D D D F F F F F F F F F F"
    "G G G G G G G G G H H H H H H H H H"
    "I I I I I I I I I J J J J J J J J J"
    "K K K K K K K K K K K K K L L L L L"
    "M M M M M M M M M M M M M M M M M M";

      padding: var(--page-padding-top)
               var(--page-padding-right)
               var(--page-padding-bottom)
               var(--page-padding-right);
  
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
  & div:nth-child(13) { grid-area: M; } // Spring Boot crud postgresql

  @media screen and (max-width: 750px) {
    grid-template-areas:
    "A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M";

    & div {
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }
`
