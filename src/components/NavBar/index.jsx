import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <div className={styles.show}>
            <NavLink to="/News"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                NEWS
            </NavLink>
            <NavLink to="/Video"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                VIDEO
            </NavLink>
            <NavLink to="/Store"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                STORE
            </NavLink>
            <NavLink to="/Team"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                TEAM
            </NavLink>      
        </div>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="MENU" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}