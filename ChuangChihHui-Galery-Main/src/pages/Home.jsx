import Preface from '../components/Preface'
import Opening from '../components/Opening'
import preface_text from '../datas/preface_text.json'
import seriesItem from '../datas/thumbnails.json'
import thumbnails from '../datas/thumbnails.json'
import { Link } from 'react-router-dom'


const Home = () => {

  const ScreenWidth = window.innerWidth

  const seriesRender = seriesItem.map((series, index) => {
    if(index < 8)
      return(
        <div key={index} style={{width:"23%", marginBottom:"50px", position:"relative"}}>
          <Link to={`/portfolio/${series.catergory}`}>
            <img src={series.img} alt="" style={{width:"100%", height:"100%"}} className='bd-r-sm bx-sd-sm'/>
            <div className='thumbnailMask'>
              <h4>{series.tag}</h4>
            </div>
          </Link>
        </div>
      )
  })

  const imgRender = (img_Id) => {
    const thumbnail = thumbnails[img_Id -= 1];
    if (!thumbnail) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
        <Link to={`/portfolio/${thumbnail.catergory}`}>
          <img
            src={thumbnails[img_Id].img} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <h4>{thumbnail.tag}</h4>
            {/* <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{thumbnail.name}</h5>
              <h5>{thumbnail.size} {thumbnail.mediums} {thumbnail.year}</h5>
            </div> */}
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>

      <Opening />

      {/* <Preface listings={preface_text}/>

      <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
        <ul className='df'>
          <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' className='outerLink mg-r-30' target='_blank'><li>地址</li></a>
          <a href='https://www.instagram.com/sawago88/' className='outerLink mg-r-30' target='_blank'><li>IG</li></a>
          <a href='https://www.facebook.com/chc888' className='outerLink mg-r-30' target='_blank'><li>FB</li></a>
          <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' className='outerLink mg-r-30' target='_blank'><li>紀錄片</li></a>
        </ul>
      </div> */}

      <div style={{marginTop:"110vh"}} className='df jc-sb fl-wp'>
        {/* {seriesRender} */}
        <div className='df jc-sb fl-wp'>
          {imgRender(5)}
          {imgRender(13)}
          {imgRender(25)}
          {imgRender(41)}
          {imgRender(13)}
          {imgRender(69)}
          {imgRender(99)}
          {imgRender(75)}
        </div>
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