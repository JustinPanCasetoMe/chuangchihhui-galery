import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'

const BlockChain = () => {

  const ScreenWidth = window.innerWidth

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
        <Link to={`/portfolio/artworks/${artwork.name}`}>
          <img
            src={artworks[img_Id].thumbnail} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
              <h5>{artwork.size} {artwork.mediums} {artwork.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>區塊鏈系列</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(6)}
        {imgRender(82)}
        {imgRender(87)}
        {imgRender(83)}
        {imgRender(85)}
        {imgRender(84)}
        {imgRender(27)}
        {imgRender(38)}
        {imgRender(104)}
        {imgRender(41)}
        {imgRender(101)}
        {imgRender(44)}
      </div>
    </div>
  )
}

export default BlockChain