import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Default from './routes/Default'
import InfoExtension from './routes/InfoExtension'
import DevExtension from './routes/DevExtension'
import DesignExtension from './routes/DesignExtension'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} >
                <Route path="default" element={<Default />} />
                <Route path="infoextension" element={<InfoExtension />} />
                <Route path="devextension" element={<DevExtension />} />
                <Route path="designextension" element={<DesignExtension />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
