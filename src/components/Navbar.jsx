import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';


import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo, menu, close} from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    const {t,i18n} = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage)
    };


    useEffect(() => {
        // Récupérer la langue depuis le localStorage, par défaut 'fr'
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []); // L


    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex-2 flex items-center gap-2"
                    onClick={() => {
                        //setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Gabriel POTO MUSALAMPASI &nbsp;
                        {/*
                    <span className="sm:block-hidden">| JAVASCRIPT FULLSTACK DEVELOPER</span>
*/}
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex items-center gap-10">
                    {navLinks.map((nav) =>
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                active === nav.title ? "text-white" : "text-secondary"
                            }`}
                            onClick={() => {
                                setActive(nav.title);
                            }}
                        >
                            <a href={`#${nav.id}`}>{t(nav.title)}</a>
                        </li>
                    )}
                </ul>
                <div className="flex items-center gap-2">
                    <select
                        onChange={changeLanguage}
                        value={i18n.language}
                        className="text-base rounded p-2"
                    >
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </select>

                </div>
                <div className='sm:hidden flex justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title ? "text-white" : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{t(nav.title)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
