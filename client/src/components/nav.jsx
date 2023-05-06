import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  function showMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('show-menu');
  }

  function hideMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }

  function closeMenu() {
    const navLinks = document.querySelectorAll('.nav__close');
    navLinks.forEach((link) => link.addEventListener('click', hideMenu));
  }

  const darktheme = 'dark-theme';
  const darkIcon = 'ri-moon-line';

  const toggleTheme = () => {
    const newTheme = selectedTheme === 'light' ? 'dark-theme' : 'light';
    setSelectedTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme);

    const newIcon = selectedIcon === 'ri-sun-line' ? 'ri-moon-line' : 'ri-sun-line';
    setSelectedIcon(newIcon);
    localStorage.setItem('selected-icon', newIcon);
  };

  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selected-theme') || 'light');
  const [selectedIcon, setSelectedIcon] = useState(localStorage.getItem('selected-icon') || 'ri-sun-line');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('dark-theme', 'light');
    body.classList.add(selectedTheme);
  }, [selectedTheme]);


  
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/admin" className="nav__logo">
            Naceur Keraani
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to="/" className="nav__link active-link">
                  <i className="ri-home-5-line"></i> Home
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/skills" className="nav__link">
                  <i className="ri-trophy-line"></i> Skills
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/qualification" className="nav__link">
                  <i className="ri-book-open-line"></i> Qualification
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/server" className="nav__link">
                  <i className="ri-briefcase-line"></i> Services
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/project" className="nav__link">
                  <i className="ri-image-line"></i> Projects
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  <i className="ri-chat-3-line"></i> Contact
                </Link>
              </li>
            </ul>

            {/* <!-- Close Button --> */}
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons" >
            {/* <!-- Theme Change Button --> */}
            <i className={`ri-moon-line change-theme ${selectedIcon}`} id="theme-button" onClick={toggleTheme}></i>
           
      
            {/* <!-- Toggle Button --> */}
            <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>
     
    </>
  );
}

export default Nav;
