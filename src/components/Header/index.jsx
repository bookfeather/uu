import styles from "./header.module.css";
import { Link } from "react-router-dom"
import NavBar from "../NavBar";
import HamburgerMenu from "../HamburgerMenu"
import { useState } from "react";
export default function Header({ open, onClose }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <header>
            <div className={styles.header}>

                <Link to={`/Home`}>
                    <img src="/images/logo.png" className={styles.header_logo} />
                </Link>
                <HamburgerMenu
                    onClick={() => setIsOnTouch(!isOnTouch)}
                    isOnTouch={isOnTouch}
                />
                <div className={styles.nav}>
                    <div className={styles.menu}>
                        <Link to={`/News`} className={styles.menu_item}>NEWS</Link>
                        <Link to={`/Video`} className={styles.menu_item}>VIDEO</Link>
                        <Link to={`/Store`} className={styles.menu_item}>STORE</Link>
                        <Link to={`/Team`} className={styles.menu_item_right}>TEAM</Link>
                    </div>
                </div>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                <div className={styles.user}>
                </div>
            </div>
        </header>
    );
}