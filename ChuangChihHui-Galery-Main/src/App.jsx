import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import { Portfolio, Experiences, Critics, Collections, Contacts, Home } from './pages'

function App() {

  return (
    <div className='pd-y-container'>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/experiences' element={<Experiences />}></Route>
        <Route path='/critics' element={<Critics />}></Route>
        <Route path='/collections' element={<Collections />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>


      <Header />
      <Footer />
    </div>
  )
}

export default App
