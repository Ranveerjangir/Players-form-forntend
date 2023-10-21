import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddData from './AddData'
import GetData from './getData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <header>
      <Link to="/addData">Add Data</Link>
      <Link to="/getData">Get Data</Link>
    </header>
      <Routes>
        <Route path="/addData" element={<AddData />} />
        <Route path="/getData" element={<GetData />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App