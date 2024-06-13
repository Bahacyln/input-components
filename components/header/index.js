import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { LuTextCursorInput } from "react-icons/lu";

function Header() {
  return (
    <div className={styles.headerBody} >
        <div className={styles.headerInfos}>
            <Link href="" className={styles.headerLogo}>
                <LuTextCursorInput className={styles.logoInput}/>
            </Link>
            <div className={styles.headerTitle}>
                Input Components
            </div>
        </div>
        <div className={styles.headerButtons}>
            <Link href="" className={styles.headerButton}>
                Form Page 1
            </Link>
            <Link href="" className={styles.headerButton}>
                Form Page 2
            </Link>
            <Link href="" className={styles.headerButton}>
                Form Page 3
            </Link>
        </div>
    </div>
  )
}

export default Header