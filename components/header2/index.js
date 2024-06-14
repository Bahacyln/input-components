import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { LuTextCursorInput } from "react-icons/lu";

function Header2() {
  return (
    <div className={styles.headerBody} >
        <div className={styles.headerInfos}>
            <Link href="/" className={styles.headerLogo}>
                <LuTextCursorInput className={styles.logoInput}/>
            </Link>
            <div className={styles.headerTitle}>
                Input Components(header 2)
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
        </div>
    </div>
  )
}

export default Header2