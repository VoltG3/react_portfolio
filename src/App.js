import styled from 'styled-components'
import { GlobalRootStyles} from './GlobalRootStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './sections/Header'
import Info from './sections/Info'
import Dev from './sections/Dev'
import Design from './sections/Design'
import Footer from './sections/Footer'
import Default from './routes/Default'

const StyledAppContainer = styled.div`
 
`

export default function App() {

  return (
      <StyledAppContainer>
          <GlobalRootStyles />
          <GlobalFontStyles />
              <Header />
                <Outlet />
                  {/*<Info />*/}
                  {/*<Dev />*/}
                  {/*<Design />*/}
              <Footer />
      </StyledAppContainer>
  )
}
