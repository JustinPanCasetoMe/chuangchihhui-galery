import Preface from '../components/Preface'
import preface_text from '../datas/preface_text.json'


const Home = () => {

  const ScreenWidth = window.innerWidth

  return (
    <div>
      <Preface listings={preface_text}/>

      <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
        <ul className='df'>
          <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' className='outerLink mg-r-30' target='_blank'><li>地址</li></a>
          <a href='https://www.instagram.com/sawago88/' className='outerLink mg-r-30' target='_blank'><li>IG</li></a>
          <a href='https://www.facebook.com/chc888' className='outerLink mg-r-30' target='_blank'><li>FB</li></a>
          <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' className='outerLink mg-r-30' target='_blank'><li>紀錄片</li></a>
        </ul>
      </div>

      <div className={`${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}`}>

        
      </div>

      <div className={`${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}`}>
        <ul className='txt-aln-c'>
          <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>地址</li></a>
          <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>IG</li></a>
          <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>FB</li></a>
          <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>紀錄片</li></a>
        </ul>
      </div>

      <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}`}>
        <ul className='txt-aln-c'>
          <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>地址</li></a>
          <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>IG</li></a>
          <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>FB</li></a>
          <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>紀錄片</li></a>
        </ul>
      </div>

    </div>
  )
}

export default Home