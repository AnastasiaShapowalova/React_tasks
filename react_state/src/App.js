import './App.css'
import React from 'react'
import Pagination from './components/Pagination/Pagination'

function App() {
  return (
    <div className="App">
      <Pagination count="100" limit="10" />
    </div>
  )
}

export default App
