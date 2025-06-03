import { useState } from 'react'

import Header from './modules/header'


import './css/app.css'
import SearchBar from './modules/SearchBar'

function App() {

  return (
    <>
      <div>
        <Header/>
        <SearchBar/>
      </div>
     
    </>
  )
}

export default App
