import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Artworks = ({ artworks = [] }, mainArtwork ) => {

    //Get the artwork name from the Json file
    const [artworkName, setArtworkName] = useState('')

    //Find the artwork in the artworks array
    // const artwork = artworks.find(item => item.name === artworkName)

    const handlePickArtwork = (artworkPicked) => {
        setArtworkName(artworkName === artworkPicked ? null : artworkPicked)
    }


    const main_artworksRender = artworks.map((artwork, index)=> {
        if(artwork.name === artworkName){
            return(
                <div key={index} className='df jc-sb fw mg-b-lg'>
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
            )
        }
    })

    const simillar_artworksRender = artworks.map((artwork, index) => {
        if(artwork.id != 1){
            return(
                <div key={index} className='mg-b-30' style={{height:'160px'}}>

                    {/* Creating a link to the artwork detail page*/}
                    <Link to={`/portfolio/artworks-${artwork.name}`} onClick={ () => handlePickArtwork(`${artwork.name}`)}>
                        <img src={artwork.img} alt="" className='bx-sd-sm fh mg-r-20 imgActive trans-2'/>
                    </Link>

                </div>
            )
        }
    })

    return (
        <div>
            {main_artworksRender}
            <div>
                <h2 className='mg-b-30'>相似作品</h2>
                <div className='df fl-wp'>
                    {simillar_artworksRender}
                </div>
            </div>
        </div>
    )
}

export default Artworks