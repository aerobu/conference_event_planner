import { useState } from 'react'
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState('USA')

  return (
    <>
      <div className="App">
        <div className="tabs">
          <button>USA</button>
          <button>India</button>
          <button>England</button>
        </div>
      </div>
    </>
  )
}

export default App
