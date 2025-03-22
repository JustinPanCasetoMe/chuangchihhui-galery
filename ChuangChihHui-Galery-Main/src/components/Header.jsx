import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import '../i18n'
import { useTranslation } from 'react-i18next'
import menuItems from '../datas/menuItem.json'

const Header = () => {
    
    const ScreenWidth = window.innerWidth
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const menuRef = useRef(null);

    const [menuItem, setMenuItem] = useState('Artworks')
    const [menuToggle, setMenuToggle] = useState()
    const [tabClose, setTabClose] = useState()

    const [menuHover, setMenuHover] = useState(false);
    const [subMenuHover, setSubMenuHover] = useState(false);
    const [subMenuCubeHover, setSubMenuCubeHover] = useState(false);
    const [subOpen, setSubOpen] = useState(false)
    const [menuBarStatus, setMenuBarStatus] = useState(false)
    const [langActive, setLangActive] = useState(false)

    // ==================== Reload function ====================

    useEffect(() => {
        const pathname = location.pathname;
        handleReloadMenu(pathname);
    }, [location.pathname]);

    const handleReloadMenu = (pathname) => {
        switch(pathname){
        case '/portfolio/artworks':
            setMenuItem('artworks');
            break;
        case '/events':
            setMenuItem('events')
            break;
        case '/experiences':
            setMenuItem('experiences')
            break;
        case '/critics':
            setMenuItem('critics')
            break;
        case '/contacts':
            setMenuItem('contacts')
            break;
        }
    }

    // ==================== Close Tab ====================
    const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the language selector
    const languageSelectorRef = useRef(null); // Ref to the language selector area

    // Function to toggle the visibility of the language selection area
    const toggleLanguageSelector = () => {
        setIsOpen((prev) => !prev);
    };

    // Close the language selector if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside the language selection area
            if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target)) {
                setIsOpen(false); // Close the language selection area
                console.log(languageSelectorRef.current.contains(event.target))
            }
        };
        // Add event listener to the document when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is outside both menu and menu button
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.menuBar') // Prevent closing when clicking the menu button
            ) {
                setMenuBarStatus(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    


    // ==================== MenuItem Render ====================
    const menuItemRender = menuItems.map((menu, index) => {
        const subMenuItemRender = menu.sub.map((sub, subIndex) => {
            return(
                <li
                    key={subIndex}
                    className='bd-b'
                    style={{width:"200px"}}
                >
                    <Link
                        key={subIndex}
                        to={`/portfolio/${sub.pathname}`}
                        className='df aln-itm-c pd-10'
                        style={{backgroundColor:"$fff"}}
                    >
                        {sub.text}
                        <FaAngleRight size={16} className='pd-l-10'/>
                    </Link>
                </li>
            )
        })

        return(
            <li
                key={index}
                onClick={()=>{setMenuItem(menu.id)}}
                className='pd-w-10'
                style={{position:"relative", backgroundColor:"#fff"}}
            >
                <Link
                    to={`${menu.url}`}
                    className={`
                        pd-10 df jc-c aln-itm-c
                        ${ScreenWidth<768 ? 'bd-b' : ''}
                        ${menu.id==menuItem ? 'menuItemActive' : ''}`
                    }
                    style={{color:`${menu.id==menuItem ? '#383838' : ''}`, width:"100px"}}
                    onMouseEnter={()=> setMenuToggle(menu.id)}
                    onMouseLeave={()=> setMenuToggle()}
                >
                    {t(menu.menu)} 
                    <FaAngleDown size={16} className={`pd-l-10 ${menu.id == 'artworks' ? 'db' : 'dn'}`}/>
                    <ul
                        className={`${ menu.id == menuToggle? 'db' : 'dn'} pointer`}
                        style={{
                            position:"absolute",
                            top:"100%",
                            left:"10px",
                            // width:"100px",
                            paddingTop:"10%",
                            backgroundColor:"#fff",
                            border:"0.6px solid var(--grey-1)"
                    }}>
                        {subMenuItemRender}
                    </ul>
                </Link>
            </li>
        )
    })

    // ==================== Language Select ====================
    const handleLanguageSelect = () => {
        setLangActive(!langActive)
        setIsOpen((prev) => !prev);
    }
    const handleCloseTab = () => {
        setTabClose(false)
        console.log(tabClose)
    }

    const languageSelect = (e) => {
        console.log(e.target.value)
    }

    const menubarToggle = () => {
        setMenuBarStatus(!menuBarStatus)
    }

    const handleMenubarClose = (menu) => {
        setMenuBarStatus(false)
        setSubOpen(false)
        setMenuItem(menu)
    }

    const handleSubOpen = () => {
        return(
            <div></div>
        )
    }

    return (
        <>
            {/* Navigation Bar for the website version*/}
            <header className={`
                df jc-sb aln-itm-c fw pd-x-container
                ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
            `}>
                <div className='df jc-sb aln-itm-c fw'>
                    {/* Logo Container */}
                    <Link to='/' onClick={handleMenubarClose}>
                        <div className="Logo df aln-itm-c">
                            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
                            <div style={{width:'300px'}}>
                            <h3 style={{fontSize:'18px'}}>莊志輝</h3>
                            <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
                            </div>
                        </div>
                    </Link>

                    <div className='fh df jc-sb aln-itm-c mg-r-30'>
                        {menuItemRender}
                    </div>
                    
                </div>

            

                {/* ========== Language Select ========== */}
                <ul style={{position:'relative'}} className='df fd-c pd-w-10 fh jc-c aln-itm-c'>
                    <div className='df fd-c jc-c' onClick={handleLanguageSelect}>
                        <FaEarthAfrica size={20}/>
                    </div>
                    {isOpen && (
                        <ul
                            className={`df fd-c ${tabClose ? 'dn' : ''}`}
                            style={{
                                position:"absolute",
                                top:"160%",
                                left:"50%",
                                display:`${langActive ? '' : 'none'}`
                            }}
                            ref={languageSelectorRef}
                        >
                            <li className='lngSub' onClick={() => {changeLanguage('ch')}}>{t('中文')}</li>
                            <li className='lngSub' onClick={() => {changeLanguage('en')}}>{t('英文')}</li>
                        </ul>
                    )}
                </ul>
            </header>


            {/* ======== Navigation Bar for the 768-1024 version ========*/}
            <header className={`
                df jc-sb aln-itm-c fw pd-x-container
                ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  
            `}>

                {/* Logo Container */}
                <div className='df jc-sb aln-itm-c fw'>
                    {/* Logo Container */}
                    <Link to='/' onClick={handleMenubarClose}>
                        <div className="Logo df aln-itm-c">
                            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
                            <div style={{width:'300px'}}>
                            <h3 style={{fontSize:'18px'}}>莊志輝</h3>
                            <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
                            </div>
                        </div>
                    </Link>

                    <div className='fh df jc-sb aln-itm-c mg-r-30'>
                        {menuItemRender}
                    </div>
                    
                </div>

                {/* ========== Language Select ========== */}
                <ul style={{position:'relative'}} className='df fd-c pd-w-10 fh jc-c aln-itm-c'>
                    <div className='df fd-c jc-c' onClick={handleLanguageSelect}>
                        <FaEarthAfrica size={20}/>
                    </div>
                    {isOpen && (
                        <ul
                            className={`df fd-c ${tabClose ? 'dn' : ''}`}
                            style={{
                                position:"absolute",
                                top:"160%",
                                left:"50%",
                                display:`${langActive ? '' : 'none'}`
                            }}
                            ref={languageSelectorRef}
                        >
                            <li className='lngSub' onClick={() => {changeLanguage('ch')}}>{t('中文')}</li>
                            <li className='lngSub' onClick={() => {changeLanguage('en')}}>{t('英文')}</li>
                        </ul>
                    )}
                </ul>
            </header>

            {/* ======== Navigation Bar for the 425-768 version ========*/}
            <header className={`
                df jc-sb aln-itm-c fw pd-x-container
                ${(375<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}  
            `}>
                {/* Logo Container */}
                <div
                    className={`df jc-sb aln-itm-c fw bd-t`}
                    style={{position:'relative'}}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                >
                    {/* Logo Container */}
                    <Link to='/' onClick={handleMenubarClose}>
                        <div className="Logo df aln-itm-c">
                            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
                            <div style={{width:'300px'}}>
                                <h3 style={{fontSize:'18px'}}>莊志輝</h3>
                                <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
                            </div>
                        </div>
                    </Link>

                    <FaBars 
                        size={32}
                        className='menuBar'
                        onClick={menubarToggle}
                    />

                    <div ref={menuRef} className={`fh df fd-c mg-r-30 ${menuBarStatus ? 'menuMobile' : 'dn'}`}>
                        {menuItemRender}
                    </div>
                    
                </div>

                {/* ========== Language Select ========== */}
                {/* <ul style={{position:'relative'}} className='df fd-c pd-w-10 fh jc-c aln-itm-c'>
                    <div className='df fd-c jc-c' onClick={handleLanguageSelect}>
                        <FaEarthAfrica size={20}/>
                    </div>
                    {isOpen && (
                        <ul
                            className={`df fd-c ${tabClose ? 'dn' : ''}`}
                            style={{
                                position:"absolute",
                                top:"160%",
                                left:"50%",
                                display:`${langActive ? '' : 'none'}`
                            }}
                            ref={languageSelectorRef}
                        >
                            <li className='lngSub' onClick={() => {changeLanguage('ch')}}>{t('中文')}</li>
                            <li className='lngSub' onClick={() => {changeLanguage('en')}}>{t('英文')}</li>
                        </ul>
                    )}
                </ul>  */}
               

            </header>
        </>
    )
}

export default Header