import { GlobalRootStyles} from './GlobalRootStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './sections/Header'
import Footer from './sections/Footer'
import useWindowDimension from './utils/useWindowDimension'

export default function App() {
  console.log(useWindowDimension())

  return (
      <div
          style={{
            display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
                maxWidth: '100vw',
                   width: '100%',
                   height: 'auto',
            paddingTop: 'var(--pagePaddingTop)'
          }}
      >
          <GlobalRootStyles />
          <GlobalFontStyles />
            <Header />
            <Outlet />
            <Footer />
      </div>
  )
}



