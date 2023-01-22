import './App.css';
import Navbar from './components/common/Navbar';
import Budget from './pages/Budget';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
