import styled from "styled-components"
import { GlobalRootStyles} from "./GlobalRootStyles.js"
import { GlobalFontStyles } from "./GlobalFontStyles.js"

import SectionHeader from "./sections/SectionHeader.js"
import SectionInfo from "./sections/SectionInfo.js"
import SectionDev from "./sections/SectionDev.js"
import SectionDesign from "./sections/SectionDesign.js"
import SectionFooter from "./sections/SectionFooter.js"

const StyledAppContainer = styled.div`
 
`

function App() {
  return (
      <StyledAppContainer>
          <GlobalRootStyles />
          <GlobalFontStyles />
              <SectionHeader />
              <SectionInfo />
              <SectionDev />
              <SectionDesign />
              <SectionFooter />
      </StyledAppContainer>
  )
}

export default App
