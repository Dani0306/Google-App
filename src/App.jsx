import React from "react"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import { Route, Routes } from 'react-router-dom'
import ResultsContainer from './components/ResultsContainer'

const App = () => {

  return (
    <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainSection />}/>
          <Route path='/:type/:query' element={<ResultsContainer/>}/>
        </Route>
    </Routes>
  )
}

export default App