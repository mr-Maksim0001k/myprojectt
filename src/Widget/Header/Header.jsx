import Logo from "../Logo/Logo";
import s from "./Header.module.scss";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkTheme) {
      rootElement.classList.add("dark-theme");
    } else {
      rootElement.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <div className={s.header}>
      <div className={s.container_logo}>
        <Logo />
      </div>
      <ul className={s.header_ul}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Оцінки</a>
        </li>
        <li>
          <a>Деконат</a>
        </li>
        <li>
          <a>Студенти</a>
        </li>
        <li>
          <a>Про нас</a>
        </li>
        <li>
          <button onClick={toggleTheme}>Змінити тему</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
