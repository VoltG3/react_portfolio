import { GlobalRootStyles} from './GlobalRootStyles'
import { GlobalFontStyles } from './GlobalFontStyles'

import { Outlet } from 'react-router-dom'

import Header from './sections/Header'
import Footer from './sections/Footer'

export default function App() {

  return (
      <div style={{
          paddingTop: '30vh'
      }}>
          <GlobalRootStyles />
          <GlobalFontStyles />
              <Header />
                <Outlet />
              <Footer />
      </div>
  )
}
