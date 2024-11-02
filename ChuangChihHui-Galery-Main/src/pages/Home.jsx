import Preface from '../components/Preface'
import preface_text from '../datas/preface_text.json'

const Home = () => {
  return (
    <div>
      <Preface listings={preface_text}/>
    </div>
  )
}

export default Home