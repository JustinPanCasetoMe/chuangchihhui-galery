import Graphics_Creation from '../components/Graphics_Creation'
import Preface from '../components/Preface'
import preface_text from '../datas/preface_text.json'
import graphicLink from '../datas/graphics_creation.json'
import artworks from '../datas/artworks.json'


const Home = () => {
  return (
    <div>
      <Preface listings={preface_text}/>
      <Graphics_Creation graphicLink={artworks}/>
    </div>
  )
}

export default Home