
// components/Header.js
"use client";
import { useState, useEffect } from 'react';

import Image from 'next/image';
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";

import styles from "../Styles/navbar.module.css";
import { useRouter } from 'next/navigation';


import logo from "../images/Learnify_transparent.png";

const Header = ({highlight}) => {
    console.log(highlight);
    const router=useRouter()
    const [navActive, setNavActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    // const [login, setlogin] = useState(true);

    const gotoAbout=()=>{
        router.push("/About")
    }
    const gotoHome=()=>{
        router.push("/")
    }
    const gotoCourses=()=>{
        router.push("/Course")
    }
    const gotoLogin=()=>{
        router.push("/Login")
    }
    const gotoContact=()=>{
        router.push("/Contact")
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    

    const handleNavToggle = () => setNavActive(!navActive);
    
    return (
        <>
            <header className={`${scrolling ? styles.scrolling : ""} ${styles.header}`}  >
                <a href="#">
                    <Image className={styles.logo } src={logo} alt='Learnify' />
                </a>
                <div>
                    <ul className={`${styles.navbar} ${navActive ? styles.active : ''}`}>


                        
                        <li className={`${highlight === 'home' ? 'text-yellow-500' : ''}`} onClick={gotoHome}>Home</li>
                        <li className={`${highlight === 'about' ? 'text-yellow-500' : ''}`} onClick={gotoAbout}>About Us</li>
                        <li className={`${highlight === 'courses' ? 'text-yellow-500' : ''}`} onClick={gotoCourses}>Courses</li>
                        <li className={`${highlight === 'contact' ? 'text-yellow-500' : ''}`} onClick={gotoContact}>Contact Us</li>
                        <li className={`${highlight === 'login' ? 'text-yellow-500' : ''}`} onClick={gotoLogin}>Login</li>

                        <a href="#" onClick={handleNavToggle} className={styles.close}>
                            <div className="bg-red-700 rounded-full p-1 w-7 h-7 flex items-center justify-center">
                                <IoIosClose className="text-white" />
                            </div>
                        </a>
                    </ul>
                </div>
                <div className={styles.mobile}>
                    <i><HiBars3 id={styles.bar} onClick={handleNavToggle} /></i>
                </div>
            </header>
        </>
    );
};

export default Header;
