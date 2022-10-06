import { useState } from 'react'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Button from './componenets/Button'
import Testing from './componenets/Testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
        <Testing name="Jennie"/>
      <Footer />
    </div>
  )
}

export default App
