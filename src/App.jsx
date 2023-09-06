import React, { useState } from 'react'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

function App() {
  const [theme, setTheme] = useState('dark-mode');
  const [currentCountry, setCurrentCountry] = useState({});

  return(
      <div className={"main" + ' ' + theme} >
        <Layout theme={theme} setTheme={setTheme} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
          </Routes>
        </Layout>
      </div>
  )
}

export default App