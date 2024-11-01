import { useState } from 'react'
import { IndiaMap, USMap } from './components/maps';
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState('USA')

  return (
    <>
      <div className="App">
        <div className="tabs">
          <button onClick={()=>setSelectedTab('USA')}>USA</button>
          <button onClick={()=>setSelectedTab('India')}>India</button>
        </div>
      </div>
      {selectedTab === 'USA' && <USMap />}
      {selectedTab === 'India' && <IndiaMap />}
    </>
  )
}

export default App
