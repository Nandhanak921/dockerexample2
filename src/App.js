import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Example from './components/example'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='ex'element={<Example/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
