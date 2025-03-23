import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import menuItems from '../datas/menuItem.json';
import '../i18n';

// Constants
const SCREEN_SIZES = {
  MOBILE: { min: 375, max: 767 },
  TABLET: { min: 768, max: 1023 },
  DESKTOP: { min: 1024, max: 1960 }
};

// Components
const Logo = ({ onClick }) => (
  <Link to='/' onClick={onClick}>
    <div className="Logo df aln-itm-c">
      <img 
        src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" 
        alt="logo" 
        className='mg-r-20' 
        style={{height:'40%'}}
      />
      <div style={{width:'200px'}}>
        <h3 style={{fontSize:'18px'}}>莊志輝</h3>
        <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
      </div>
    </div>
  </Link>
);

const SubMenuItem = ({ sub }) => (
  <li className='bd-b' style={{width:"200px"}}>
    <Link
      to={`/portfolio/${sub.pathname}`}
      className='df aln-itm-c pd-10'
      style={{backgroundColor:"#fff"}}
    >
      {sub.text}
      <FaAngleRight size={16} className='pd-l-10'/>
    </Link>
  </li>
);

const LanguageSelector = ({ isOpen, languageSelectorRef, changeLanguage, t }) => (
  isOpen && (
    <ul
      className="df fd-c"
      style={{
        position: "absolute",
        top: "160%",
        left: "50%"
      }}
      ref={languageSelectorRef}
    >
      <li className='lngSub' onClick={() => changeLanguage('ch')}>{t('中文')}</li>
      <li className='lngSub' onClick={() => changeLanguage('en')}>{t('英文')}</li>
    </ul>
  )
);

const Header = () => {
  const screenWidth = window.innerWidth;
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  const languageSelectorRef = useRef(null);

  // State
  const [menuItem, setMenuItem] = useState('Artworks');
  const [menuToggle, setMenuToggle] = useState();
  const [menuBarStatus, setMenuBarStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Effects
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !event.target.closest('.menuBar')) {
        setMenuBarStatus(false);
      }
      if (languageSelectorRef.current && 
          !languageSelectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    const route = pathname.split('/')[2] || pathname.split('/')[1];
    if (route) setMenuItem(route);
  }, [location.pathname]);

  // Handlers
  const handleMenubarClose = (menu) => {
    setMenuBarStatus(false);
    setMenuItem(menu);
  };

  const toggleLanguageSelector = () => setIsOpen(prev => !prev);

  const renderMenuItem = (menu) => (
    <li
      key={menu.id}
      onClick={() => setMenuItem(menu.id)}
      style={{position: "relative", backgroundColor: "#fff", marginRight: "20px"}}
    >
      <Link
        to={menu.url}
        className={`
          pd-10 df jc-c aln-itm-c
          ${screenWidth < 768 ? 'bd-b' : ''}
          ${menu.id === menuItem ? 'menuItemActive' : ''}
        `}
        style={{color: menu.id === menuItem ? '#383838' : ''}}
        onMouseEnter={() => setMenuToggle(menu.id)}
        onMouseLeave={() => setMenuToggle()}
      >
        {t(menu.menu)}
        {menu.id === 'artworks' && <FaAngleDown size={16} className='pd-l-10'/>}
        
        {menu.id === menuToggle && (
          <ul className="pointer" style={{
            position: "absolute",
            top: "100%",
            left: "10px",
            paddingTop: "10%",
            backgroundColor: "#fff",
            border: "0.6px solid var(--grey-1)"
          }}>
            {menu.sub.map((sub, idx) => (
              <SubMenuItem key={idx} sub={sub} />
            ))}
          </ul>
        )}
      </Link>
    </li>
  );

  const renderHeader = () => {
    const headerClass = `df jc-sb aln-itm-c fw pd-x-container`;
    const isVisible = (min, max) => 
      screenWidth >= min && screenWidth < max ? '' : 'dn';

    return (
      <header className={`${headerClass} ${isVisible(SCREEN_SIZES.DESKTOP.min, SCREEN_SIZES.DESKTOP.max)}`}>
        <div className='df jc-sb aln-itm-c fw'>
          <Logo onClick={handleMenubarClose} />
          <div className='fh df jc-sb aln-itm-c mg-r-30'>
            {menuItems.map(renderMenuItem)}
          </div>
        </div>

        <div className="language-selector" style={{position: 'relative'}}>
          <FaEarthAfrica size={20} onClick={toggleLanguageSelector}/>
          <LanguageSelector 
            isOpen={isOpen}
            languageSelectorRef={languageSelectorRef}
            changeLanguage={(lng) => i18n.changeLanguage(lng)}
            t={t}
          />
        </div>
      </header>
    );
  };

  return renderHeader();
};

export default Header;
