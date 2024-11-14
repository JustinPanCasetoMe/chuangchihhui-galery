import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import { Portfolio, Experiences, Critics, Collections, Contacts, Home, Artworks, ArtworkPeriods } from './pages'
import exhibition from './datas/exhibition.json'
import competition from './datas/competition.json'
import archive from './datas/archive.json'
import artworks from './datas/artworks.json'
import critics from './datas/critics.json'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import Period_1986_2001 from './pages/Periods/Period_1986_2001'
import Period_2002_2019 from './pages/Periods/Period_2002_2019'
import Period_2020_2024 from './pages/Periods/Period_2020_2024'
import CriticsContent from './pages/CriticsContent'

function App() {

  return (
    <div className=''>

      <Routes>
        <Route path='/chuangchihhui-galery' element={<Home />} />

        {/* Header Menu Navigation Bar Component */}
        <Route path='/chuangchihhui-galery/portfolio' element={<Portfolio artworks={artworks}/>} />
        <Route 
          path='/chuangchihhui-galery/experiences'
          element={
            <Experiences
              exhibition={exhibition}
              competition={competition}
              archive={archive}
            />}/>

        {/* Critics */}
        <Route path='/chuangchihhui-galery/critics' element={<Critics />} />
        <Route path='/chuangchihhui-galery/critics/:CriticsItem' element={<CriticsContent critics={critics}/>}></Route>

        <Route path='/chuangchihhui-galery/collections' element={<Collections/>} />
        <Route path='/chuangchihhui-galery/contacts' element={<Contacts />} />

        {/* Artworks */}
        <Route path='/chuangchihhui-galery/portfolio/artworks/:ArtworkName' element={<Artworks artworks={artworks} mainArtwork={{}}/>} />

        {/* Period */}
        <Route path='/chuangchihhui-galery/portfolio/periods/:Period' element={<ArtworkPeriods artworks={artworks}/>} />
        <Route path='/chuangchihhui-galery/portfolio/periods/1986-2001' element={<Period_1986_2001 artworks={artworks} />}></Route>
        <Route path='/chuangchihhui-galery/portfolio/periods/2002-2019' element={<Period_2002_2019 artworks={artworks} />}></Route>
        <Route path='/chuangchihhui-galery/portfolio/periods/2020-2024' element={<Period_2020_2024 artworks={artworks} />}></Route>
      </Routes>


      <Header />
      <Footer />
    </div>
  )
}

export default App
