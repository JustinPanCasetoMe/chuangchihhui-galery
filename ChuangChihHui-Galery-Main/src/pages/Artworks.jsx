import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Artworks = ({ artworks = [] }, mainArtwork ) => {

    const ScreenWidth = window.innerWidth
    let ArtworkId = 0

    const { ArtworkName } = useParams();

    const main_artworksRender = artworks.map((artwork, index)=> {
        if(artwork.name === ArtworkName){
            console.log(ArtworkName, index)
            ArtworkId = index 
            return(

                <div key={index}>
                    <div className={`
                        df jc-sb fw mg-b-lg
                        ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'
                    }`}>
                        <div style={{width:'600px', height:'500px'}} className='df jc-c'>
                            <div className='df jc-c' style={{height:'500px'}}>
                                <img src={artwork.img} alt="" className='bd-r-sm bx-sd-sm fw'/>
                            </div>
                        </div>
        
                        <div className='df fd-c jc-c' style={{width:'30%'}}>
        
                            <h3 className='mg-b-30'>{artwork.name}</h3>
                            <ul className='mg-b-30'>
                                <span className='df'>
                                    <li className='mg-b-5'>尺寸：</li>
                                    <li className='lt-sc'>{artwork.size}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>媒材：</li>
                                    <li className='lt-sc'>{artwork.mediums}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>年份：</li>
                                    <li className='lt-sc'>{artwork.year}</li>
                                </span>
                            </ul>
                            
                            <Link to='/portfolio/artworks' className='trans-2 button'>同期作品</Link>
                        </div>
                    </div>
                
                    <div className={`
                        df jc-sb fw mg-b-lg
                        ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'

                    }`}>
                        <div className='df jc-c' style={{height:'500px'}}>
                            <img src={artwork.img} alt="" className='bd-r-sm bx-sd-sm fw'/>
                        </div>
        
                        <div className='df fd-c jc-c' style={{width:'40%'}}>
        
                            <h3 className='mg-b-30'>{artwork.name}</h3>
                            <ul className='mg-b-30'>
                                <span className='df'>
                                    <li className='mg-b-5'>尺寸：</li>
                                    <li className='lt-sc'>{artwork.size}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>媒材：</li>
                                    <li className='lt-sc'>{artwork.mediums}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>年份：</li>
                                    <li className='lt-sc'>{artwork.year}</li>
                                </span>
                            </ul>
                            
                            <button className='trans-2'>同期作品</button>
                        </div>
                    </div>

                    <div className={`
                        df jc-sb fw mg-b-lg
                        ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'

                    }`}>
                        <div className='df jc-c' style={{height:'500px'}}>
                            <img src={artwork.img} alt="" className='bd-r-sm bx-sd-sm fw'/>
                        </div>
        
                        <div className='df fd-c jc-c' style={{width:'40%'}}>
        
                            <h3 className='mg-b-30'>{artwork.name}</h3>
                            <ul className='mg-b-30'>
                                <span className='df'>
                                    <li className='mg-b-5'>尺寸：</li>
                                    <li className='lt-sc'>{artwork.size}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>媒材：</li>
                                    <li className='lt-sc'>{artwork.mediums}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>年份：</li>
                                    <li className='lt-sc'>{artwork.year}</li>
                                </span>
                            </ul>
                            
                            <button className='trans-2'>同期作品</button>
                        </div>
                    </div>

                    <div className={`
                        df fw mg-b-lg
                        ${(375<=ScreenWidth && ScreenWidth < 425) ? 'fd-c' : 'dn'
                    }`}>
                        <div className='fw mg-b-30' style={{}}>
                            <img src={artwork.img} alt="" className='bd-r-sm bx-sd-sm fw'/>
                        </div>
        
                        <div className='df fd-c jc-c' style={{width:'40%'}}>
        
                            <h3 className='mg-b-30'>{artwork.name}</h3>
                            <ul className='mg-b-30'>
                                <span className='df'>
                                    <li className='mg-b-5'>尺寸：</li>
                                    <li className='lt-sc'>{artwork.size}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>媒材：</li>
                                    <li className='lt-sc'>{artwork.mediums}</li>
                                </span>
                                <span className='df'>
                                    <li className='mg-b-5'>年份：</li>
                                    <li className='lt-sc'>{artwork.year}</li>
                                </span>
                            </ul>
                            
                            <button className='trans-2'>同期作品</button>
                        </div>
                    </div>
                </div>

                
            )
        }
    })

    // const simillar_artworksRender = artworks.map((artwork, index) => {
    //     if(artwork.id == 1 || artwork.id == 2 || artwork.id == 3 || artwork.id == 4){
    //         return(
    //             <div key={index} className='mg-b-30' style={{height:'160px'}}>

    //                 {/* Creating a link to the artwork detail page*/}
    //                 <Link to={`/portfolio/artworks/${artwork.name}`}>
    //                     <img src={artwork.img} alt="" className='bx-sd-sm fh mg-r-20 imgActive trans-2'/>
    //                 </Link>

    //             </div> 
    //         )
    //     }
    // })


    const simillar_artworksRender = (artworkId) => {
        return artworks.map((artwork, index) => {
            if(artwork.id - 1 === artworkId){
                return artwork.similarArt.map((similarId, index) => {
                    // console.log("similarId = ", similarId)
                    // console.log("artwork.[",similarId,"].img = ", artworks[similarId].img)
                    return(
                        <div key={index} className='mg-b-30' style={{height:'160px'}}>
    
                            {/* Creating a link to the artwork detail page*/}
                            <Link to={`/portfolio/artworks/${artworks[similarId-1].name}`}>
                                <img src={`${artworks[similarId-1].img}`} alt="" className='bx-sd-sm fh mg-r-20 imgActive trans-2'/>
                            </Link>
                        </div> 
                    )
                })
            }
        })
    }

    return (
        <div key={{}}>
            {main_artworksRender}
            <div>
                <h2 className='mg-b-30'>相似作品</h2>
                <div className='df fl-wp'>
                    {simillar_artworksRender(ArtworkId)}
                </div>
            </div>
        </div>
    )
}

export default Artworks