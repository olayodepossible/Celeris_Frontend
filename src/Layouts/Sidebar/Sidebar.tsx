import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/logos/Logo1.png";
import { links } from "./SidebarImports";
import useWindowSize from "../../utils/customHooks/UseWindowSize";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > 1030) {
      setIsOpen(true);
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
      setIsOpen(false);
    }
  }, [width, height]);

  return (
    <>
      <button
        className={styles.burger}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </button>

      <div className={styles.sidebar}>
        {isOpen === true && (
          <div
            className={` ${styles.titleBlockContainer} ${isOpen ? styles.open : styles.closed}`}
          >
            <nav className="d-flex flex-column align-items-center justify-content-center">
              <Link to={"/"} className={styles.logo}>
                <img src={logo1} alt="Celeris" />
              </Link>
              <ul className={`${styles.navList}`}>
                {links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (isDesktop === true) {
                        setIsOpen(true);
                      } else {
                        setIsOpen(false);
                      }
                      console.log(isOpen);
                    }}
                  >
                    <NavLink to={link.path}>
                      <img src={link.icon} alt={link.name} />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
