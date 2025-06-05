import { useState } from 'react'

import Header from './modules/Header.jsx'
import Tasks from './modules/Tasks.jsx'


import './css/app.css'
import SearchBar from './modules/SearchBar'

function App() {
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState([])
  return (
    <>
      <div>
        <Header/>
        <SearchBar />
        <Tasks />
      </div>
     
    </>
  )
}

export default App
