import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight, FaBars } from 'react-icons/fa';
import { FaEarthAfrica } from 'react-icons/fa6';
import '../i18n';
import { useTranslation } from 'react-i18next';
import menuItems from '../datas/menuItem.json';
import '../css/header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [menuItem, setMenuItem] = useState('Artworks');
    const [menuToggle, setMenuToggle] = useState(null);
    const [menuBarStatus, setMenuBarStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null);
    const languageSelectorRef = useRef(null);

    // ==================== Handle Screen Width ====================
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ==================== Reload Menu ====================
    useEffect(() => {
        const pathname = location.pathname;
        const menuMapping = {
            '/portfolio/artworks': 'artworks',
            '/events': 'events',
            '/experiences': 'experiences',
            '/critics': 'critics',
            '/contacts': 'contacts',
        };
        setMenuItem(menuMapping[pathname] || 'artworks');
    }, [location.pathname]);

    // ==================== Handle Click Outside ====================
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.menuBar')
            ) {
                setMenuBarStatus(false);
            }
            if (
                languageSelectorRef.current &&
                !languageSelectorRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ==================== Toggle Functions ====================
    const toggleLanguageSelector = () => setIsOpen((prev) => !prev);
    const menubarToggle = () => setMenuBarStatus((prev) => !prev);
    const handleSubMenuToggle = (menuId) => setMenuToggle((prev) => (prev === menuId ? null : menuId));
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    // ==================== Render Menu Items ====================
    const menuItemRender = menuItems.map((menu) => (
        <li key={menu.id} style={{ position: 'relative', marginRight: '20px' }}>
            <Link
                to={menu.url}
                className={`pd-10 df jc-c aln-itm-c ${
                    screenWidth < 768 ? 'bd-b' : ''
                } ${menu.id === menuItem ? 'menuItemActive' : ''}`}
                style={{ color: menu.id === menuItem ? '#383838' : '' }}
                onClick={() => handleSubMenuToggle(menu.id)}
            >
                {t(menu.menu)}
                <FaAngleDown size={16} className={`pd-l-10 ${menu.id === menuToggle ? 'db' : 'dn'}`} />
            </Link>
            {menu.sub && (
                <ul
                    className={`
                        pointer 
                        ${menu.id === menuToggle ? 'db' : 'dn'}
                        ${screenWidth<=768 ? 'subMenuMobile' : ''}
                    `}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-100px',
                        backgroundColor: '#fff',
                        border: '0.6px solid var(--grey-1)',
                    }}
                >
                    {menu.sub.map((sub) => (
                        <li key={sub.pathname} className='bd-b' style={{ width: '200px' }}>
                            <Link to={`/portfolio/${sub.pathname}`} className="df aln-itm-c pd-10">
                                {sub.text}
                                <FaAngleRight size={16} className="pd-l-10" />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));

    // ==================== Render Header ====================
    const renderHeader = (minWidth, maxWidth) => (
        <header
            className={`
                df jc-sb aln-itm-c fw pd-x-container 
                ${screenWidth >= minWidth && screenWidth < maxWidth ? '' : 'dn'}
            `}
        >
            <div className="df jc-sb aln-itm-c fw">
                {/* Logo */}
                <Link to="/" onClick={() => setMenuBarStatus(false)}>
                    <div className="Logo df aln-itm-c">
                        <img
                            src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                            alt="Logo"
                            className="mg-r-20"
                            style={{ height: '40%' }}
                        />
                        <div style={{ width: '200px' }}>
                            <h3 style={{ fontSize: '18px' }}>莊志輝</h3>
                            <h3 style={{ fontSize: '18px' }}>CHUANG CHIH HUI</h3>
                        </div>
                    </div>
                </Link>

                {/* Menu */}
                {screenWidth >= 768 ? (
                    <div className="fh df jc-sb aln-itm-c mg-r-30">{menuItemRender}</div>
                ) : (
                    <>
                        <FaBars size={32} className="menuBar" onClick={menubarToggle} />
                        <div
                            ref={menuRef}
                            className={`fh df fd-c mg-r-30 ${menuBarStatus ? 'menuMobile' : 'dn'}`}
                        >
                            {menuItemRender}
                        </div>
                    </>
                )}
            </div>

            {/* Language Selector */}
            {/* <ul style={{ position: 'relative' }} className="df fd-c pd-w-10 fh jc-c aln-itm-c">
                <div className="df fd-c jc-c" onClick={toggleLanguageSelector}>
                    <FaEarthAfrica size={20} />
                </div>
                {isOpen && (
                    <ul
                        className="df fd-c"
                        style={{
                            position: 'absolute',
                            top: '160%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#fff',
                            border: '1px solid var(--grey-1)',
                        }}
                        ref={languageSelectorRef}
                    >
                        <li className="lngSub" onClick={() => changeLanguage('ch')}>
                            {t('中文')}
                        </li>
                        <li className="lngSub" onClick={() => changeLanguage('en')}>
                            {t('英文')}
                        </li>
                    </ul>
                )}
            </ul> */}
        </header>
    );

    return (
        <>
            {renderHeader(1024, 1960)}
            {renderHeader(768, 1024)}
            {renderHeader(375, 768)}
        </>
    );
};

export default Header;
