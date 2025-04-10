import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../css/Opening.css'
import { Link } from 'react-router-dom';

const Opening = () => {

    const [bgColor, setBgColor] = useState("transparent")
    const [iconPosition, setIconPosition] = useState("center")
    const [showSlogan, setShowSlogan] = useState(false)
    const [showText, setShowText] = useState(false)
    const [showMask, setShowMask] = useState(false)
    const ScreenWidth = window.innerWidth

    useEffect(() => {
        // Change background color after 2 seconds
        const bgTimer = setTimeout(() => {
            setBgColor("grey")
            setIconPosition("top-left");
        }, 2000);

        // Show slogan after 2.5 seconds
        const sloganTimer = setTimeout(() => {
            setShowSlogan(true);
            setShowText(true);
        }, 0);
        
        const maskTimer = setTimeout(() => {
            setShowMask(true);
        }, 3500)

        return () => {
            clearTimeout(bgTimer);
            clearTimeout(sloganTimer);
            clearTimeout(maskTimer);
        }
    }, [])




  return (
    <div
        style={{
            marginTop:`${ScreenWidth<425 ? '0px' : '-60px'}`,
            left:"0",
            width:"100%",
            height: `${ScreenWidth<425 ? '' : '100vh'}`,
            transition:"background-color 0.5s ease" //smooth transition for background color
        }}
    >
        {showSlogan && (
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform:"translateX(-50%)",
                    textAlign:"center",
                    fontSize: "24px",
                    color: "#fff",
                    zIndex:40,
                    transition: 'all 0.5s ease-in-out'
                }}
            >
                <h1
                    className='mg-b-10'
                    style={{fontWeight:"500", fontSize:`${ScreenWidth<425 ? '16px' : ''}`}}
                >
                    CHUANG CHIH HUI
                </h1>
                <div>
                    <p style={{fontSize:"12px", marginBottom:"10px"}}>Surrealist Artist</p>
                    <p style={{fontSize:"12px"}}>Painting x Sculpture x Bronze x Mixed Media</p>
                </div>
            </div>
        )}

        <Link to={'/#homeExplore'} className='exploreContainer'>
            <div
                className='exploreBtn'
                style={{display:`${ScreenWidth<425 ? 'none' : ''}`}}
            >
                <h4 style={{fontWeight:"400", marginRight:"40px"}}>EXPLORE</h4>
                <FaChevronDown size={20} style={{fontWeight:"200"}}/>
            </div>
        </Link>

        <div className="OpeningBG">
            <div
                style={{
                    width:"100%",
                    height:"100%",
                    backgroundColor: showMask ? 'var(--openingBG-mask)' : '',
                    // backgroundColor:{`${showMask ? 'var(--openingBG-mask)' : ''}`},
                    transition:"all 1s ease-in-out"
                }}>
            </div>
        </div>
    </div>
  )
}

export default Opening