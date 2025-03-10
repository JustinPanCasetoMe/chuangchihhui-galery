import Preface from '../components/Preface'
import Opening from '../components/Opening'
import preface_text from '../datas/preface_text.json'
import artworks from '../datas/artworks.json'
import { Link } from 'react-router-dom'


const Home = () => {

  const ScreenWidth = window.innerWidth

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
        <Link to={`/portfolio/${artwork.series}`}>
          <img
            src={artworks[img_Id].thumbnail} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <h4>{artwork.tag}</h4>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>

      <Opening />


      <div style={{marginTop:"110vh"}} className='df jc-sb fl-wp'>
        {/* {seriesRender} */}
        <div className='df jc-sb fl-wp'>
          {imgRender(14)}
          {imgRender(2)}
          {imgRender(6)}
          {imgRender(167)}
          {imgRender(5)}
          {imgRender(43)}
          {imgRender(119)}
          {imgRender(143)}
        </div>
      </div>


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