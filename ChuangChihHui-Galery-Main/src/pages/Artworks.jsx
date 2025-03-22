import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArtworkDetails = ({ artwork }) => {
    return (
        <div className='df fd-c jc-c' style={{width:'30%'}}>
            <h3 className='mg-b-30'>{artwork.name}</h3>
            <ul className='mg-b-30'>
            {[
                { label: '尺寸', value: artwork.size },
                { label: '媒材', value: artwork.mediums },
                { label: '年份', value: artwork.year }
            ].map(({ label, value }) => (
                <span key={label} className='df'>
                    <li className='mg-b-5'>{label}：</li>
                    <li className='lt-sc'>{value}</li>
                </span>
            ))}
            </ul>
            <Link to='/portfolio/artworks' className='trans-2 button'>同期作品</Link>
        </div>
    );
};

const ArtworkImage = ({ img }) => (
    <div className='df jc-c' style={{height:'500px'}}>
        <img src={img} alt="" className='bd-r-sm bx-sd-sm fh'/>
    </div>
);

const ResponsiveArtworkView = ({ artwork, screenWidth }) => {
    const layouts = {
        desktop: {
            condition: screenWidth >= 1024 && screenWidth < 1960,
            containerClass: 'df jc-sb fw mg-b-lg',
            imageWidth: '600px'
        },
        tablet: {
            condition: screenWidth >= 768 && screenWidth < 1024,
            containerClass: 'df jc-sb fw mg-b-lg',
            imageWidth: '100%'
        },
        mobile: {
            condition: screenWidth >= 375 && screenWidth < 768,
            containerClass: 'df fw mg-b-lg fd-c',
            imageWidth: '100%'
        }
    };

    const currentLayout = Object.values(layouts).find(layout => layout.condition);

    if (!currentLayout) return null;

    return (
        <div className={`${currentLayout.containerClass} ${currentLayout.condition ? '' : 'dn'}`}>
            <div style={{width: currentLayout.imageWidth}}>
                <ArtworkImage img={artwork.img} />
            </div>
            <ArtworkDetails artwork={artwork} />
        </div>
    );
};

const SimilarArtworks = ({ artworks, currentArtworkId }) => {
    const currentArtwork = artworks[currentArtworkId];
    if (!currentArtwork) return null;
    
    // Check if there are no similar artworks
    if (!currentArtwork.similarArt || currentArtwork.similarArt.length === 0) {
        return (
            <div>
                <h2 className='mg-b-30'>相似作品</h2>
                <h3 style={{color:"var(--grey-2)"}}>暫無相似作品</h3>
            </div>
        );
    }

    return (
        <div>
            <h2 className='mg-b-30'>相似作品</h2>
            <div className='df fl-wp'>
                {currentArtwork.similarArt.map((similarId, index) => {
                    
                    const similarArtwork = artworks[similarId - 1];
                    if (!similarArtwork) return null;

                    return (
                        <div key={index} className='mg-b-30' style={{height:'160px'}}>
                            <Link to={`/portfolio/artworks/${similarArtwork.name}`}>
                                <img
                                    src={similarArtwork.img} 
                                    alt={similarArtwork.name}
                                    className='bx-sd-sm fh mg-r-20 imgActive trans-2'
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Artworks = ({ artworks = [] }) => {
    const { ArtworkName } = useParams();
    const screenWidth = window.innerWidth;
  
    const currentArtworkId = artworks.findIndex(artwork => artwork.name === ArtworkName);
    const currentArtwork = artworks[currentArtworkId];

    if (!currentArtwork) return <div>Artwork not found</div>;

    return (
        <div>
        <ResponsiveArtworkView 
            artwork={currentArtwork} 
            screenWidth={screenWidth} 
        />
        <SimilarArtworks 
            artworks={artworks} 
            currentArtworkId={currentArtworkId} 
        />
        </div>
    );
};

export default Artworks;
