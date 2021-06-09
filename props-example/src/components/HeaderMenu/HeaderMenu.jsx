import React from 'react';

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ({items, title}) => {
    const menuElements = items.map(item => <li className={styles.item}>
                                                <a href={item.href} className={styles.link}>{item.text}</a>
                                            </li>);
    return (
        <>
            <h2>{title}</h2>
            <ul className={styles.menu}>
                {menuElements}
            </ul>
        </>
    );
};

export default HeaderMenu;