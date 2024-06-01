import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/logos/Logo1.png';

interface SidebarProps {
  links: { name: string; icon?: string; path: string }[];
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  links,
  children,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [window]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleBlockContainer}>
        <button
          className={styles.burger}
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(!isOpen);
          }}
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
        <nav className="d-flex flex-column align-items-center justify-content-center">
          <div className={styles.logo}>
            <img src={logo1} alt="Celeris" />
          </div>
          <ul className={`${styles.navList} ${!isOpen ? styles.crumbs : ''}`}>
            {links.map((link, index) => (
              <NavLink to={link.path} key={index}>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <img src={link.icon} alt={link.name} />
                  {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Sidebar;
