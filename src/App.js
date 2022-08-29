import styled from 'styled-components'
import { GlobalRootStyles} from './GlobalRootStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import SectionHeader from './sections/SectionHeader'
import SectionInfo from './sections/SectionInfo'
import SectionDev from './sections/SectionDev'
import SectionDesign from './sections/SectionDesign'
import SectionFooter from './sections/SectionFooter'

const StyledAppContainer = styled.div`
 
`

export default function App() {
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
