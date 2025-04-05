import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEarthAfrica } from 'react-icons/fa6';

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);

    // ==================== Toggle Functions ====================
    const toggleLanguageSelector = () => setIsOpen((isOpen) => !isOpen);
    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    const languageSelectorRef = useRef(null);
    const { t, i18n } = useTranslation()

    // 點擊外部時關閉語言選擇器
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageSelectorRef.current &&
                !languageSelectorRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <ul className="lgnEarth df fd-c pd-w-10 fh jc-c aln-itm-c">
            <div className="df fd-c jc-c ps-rl" onClick={toggleLanguageSelector}>
                <FaEarthAfrica size={20} />
                {isOpen && (
                    <ul
                        className="df fd-c lngSub"
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
                        <li className="lngSubItem" onClick={() => changeLanguage('ch')}>
                            {t('中文')}
                        </li>
                        <li className="lngSubItem" onClick={() => changeLanguage('en')}>
                            {t('English')}
                        </li>
                    </ul>
                )}
            </div>
        </ul>
    )
}

export default LanguageSelector