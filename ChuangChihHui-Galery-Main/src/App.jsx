import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, useParams } from 'react-router'
import { Portfolio, Experiences, Critics, Collections, Contacts, Home, Artworks, ArtworkPeriods } from './pages'
import exhibition from './datas/exhibition.json'
import competition from './datas/competition.json'
import archive from './datas/archive.json'
import artworks from './datas/artworks.json'
import criticsContent1 from './datas/criticsContent/text01.json'
import criticsContent2 from './datas/criticsContent/text02.json'
import criticsContent3 from './datas/criticsContent/text03.json'
import criticsContent4 from './datas/criticsContent/text04.json'
import criticsContent5 from './datas/criticsContent/text05.json'
import criticsContent6 from './datas/criticsContent/text06.json'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import Period_1986_2001 from './pages/Periods/Period_1986_2001'
import Period_2002_2019 from './pages/Periods/Period_2002_2019'
import Period_2020_2024 from './pages/Periods/Period_2020_2024'
import CriticsContent from './pages/CriticsContent'
import UnXiangArea from './pages/Periods/UnXiangArea'

function App() {

  const { CriticsItem } = useParams()
  console.log(CriticsItem)

  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:MenuItem/'/>

        {/* Header Menu Navigation Bar Component */}
        <Route path='/portfolio' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:Classics' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:graphics' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:threeD' element={<Portfolio artworks={artworks}/>} />
        <Route 
          path='/experiences'
          element={
            <Experiences
              exhibition={exhibition}
              competition={competition}
              archive={archive}
            />}/>

        {/* Critics */}
        <Route path='/critics' element={<Critics />} />
        <Route
          path='/critics/:CriticsItem'
          element={
            <CriticsContent
              CriticsContent={
                CriticsItem == 1 ? criticsContent1 :
                CriticsItem == 2 ? criticsContent2 :
                CriticsItem == 3 ? criticsContent3 :
                CriticsItem == 4 ? criticsContent4 :
                CriticsItem == 5 ? criticsContent5 :
                CriticsItem == 6 ? criticsContent6 : {}
              }
            />
          }
        />

        <Route path='/collections' element={<Collections/>} />
        <Route path='/contacts' element={<Contacts />} />

        {/* Artworks */}
        <Route path='/portfolio/artworks/:ArtworkName' element={<Artworks artworks={artworks} mainArtwork={{}}/>} />

        {/* Period */}
        <Route path='/portfolio/periods/:Period' element={<ArtworkPeriods artworks={artworks}/>} />
        <Route path='/portfolio/periods/1986-2001' element={<Period_1986_2001 artworks={artworks} />} />
        <Route path='/portfolio/periods/2002-2019' element={<Period_2002_2019 artworks={artworks} />} />
        <Route path='/portfolio/periods/2020-2024' element={<Period_2020_2024 artworks={artworks} />} />
        <Route path='/portfolio/unxiangarea' element={<UnXiangArea artworks={artworks} />} />
      </Routes>


      <Header />
      <Footer />
    </div>
  )
}

export default App
