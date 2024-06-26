import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { LuTextCursorInput } from "react-icons/lu";

const getCurrentPathValue = (ARR,pathName) =>{
    for(let i=0;i<ARR.length;i++){
        if(ARR[i]==pathName)
            return 0;
    }
    return 1;
}

function Header({currentPath}) {

    const notLayoutArray = [
        "/login",
        "/page3"
    ];

    const durum = getCurrentPathValue(notLayoutArray, currentPath);
    console.log("durum",durum);
    
    const headerItem = (durum?<div className={styles.headerBody} >
        <div className={styles.headerInfos}>
            <Link href="/" className={styles.headerLogo}>
                <LuTextCursorInput className={styles.logoInput}/>
            </Link>
            <div className={styles.headerTitle}>
                Input Components
            </div>
        </div>
        <div className={styles.headerButtons}>
            <Link href="/page1" className={styles.headerButton}>
                Page 1
            </Link>
            <Link href="/page2" className={styles.headerButton}>
                Page 2
            </Link>
            <Link href="/page3" className={styles.headerButton}>
                Page 3
            </Link>
            <Link href="/login" className={styles.loginButton}>
                Giriş Yap
            </Link>
        </div>
    </div>:"");


    return headerItem;
}

export default Header