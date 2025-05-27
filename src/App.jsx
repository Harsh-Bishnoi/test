import About from '../view/About'
import ContactPage from '../view/ContactPage'
import Counter from '../view/Counter'
import Home from '../view/Home'
import Swipers from '../view/Swipers'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactPage' element={<ContactPage/>} />
          <Route path='/swiper' element={<Swipers />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App