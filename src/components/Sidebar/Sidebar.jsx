import React from "react";

import styles from "./Sidebar.module.scss";

import { NavLink, Redirect } from "react-router-dom";

import { imgs } from "../../mock/mock";

const SideBar = ({handleLogout}) => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>
        <img src={imgs.logoText} className={styles.logoIconText} />
        <div className={styles.logoIconWrap}>
          <img src={imgs.logoIcon} className={styles.logoIcon} />
        </div>
      </div>
      <nav className={styles.navWrap}>
        <ul className={styles.navList}>
          <NavLink to={"/"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.pageIcon}
                alt="page-icon"
              />
              <p className={styles.navText}>Main page</p>
            </li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.productsIcon}
                alt="product-icon"
              />
              <p className={styles.navText}>My products</p>
            </li>
          </NavLink>
          <NavLink to={"/sales"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.salesIcon}
                alt="sales-icon"
              />
              <p className={styles.navText}>My sales</p>
            </li>
          </NavLink>
          <NavLink to={"/personal-cabinet"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.personCabinetIcon}
                alt="cabinet-icon"
              />
              <p className={styles.navText}>Personal cabinet</p>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className={styles.loginWrap}>
        <hr />
        <div onClick={handleLogout} className={styles.loginElement}>
          Log out
        </div>
      </div>
    </div>
  );
};
export default SideBar;
