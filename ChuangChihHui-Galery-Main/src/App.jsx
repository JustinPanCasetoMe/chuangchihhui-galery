import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, useParams } from 'react-router'
import { Portfolio, Experiences, Critics, Collections, Contacts, Home, Artworks, ArtworkPeriods } from './pages'
import exhibition from './datas/exhibition.json'
import competition from './datas/competition.json'
import archive from './datas/archive.json'
import artworks from './datas/artworks.json'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

function App() {

  const { Period } = useParams();

  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio artworks={artworks}/>} />
        <Route 
          path='/experiences'
          element={
            <Experiences
              exhibition={exhibition}
              competition={competition}
              archive={archive}
            />}/>
        <Route path='/critics' element={<Critics />} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/contacts' element={<Contacts />} />
        {/* <Route path='/portfolio/:artworksName' element={<Artworks artworks={artworks} mainArtwork={{}}/>} /> */}
        <Route path='/portfolio/:Period' element={<ArtworkPeriods artworks={artworks}/>} />
      </Routes>


      <Header />
      <Footer />
    </div>
  )
}

export default App
