import logoIcon from "@shared/assets/logo.svg";

import cls from "./navbar.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@app/Provider";
import { NavSectionType, setSection } from "@features/Navigation/slice";

const sectionMap: Record<string, NavSectionType> = {
  Главная: "main",
  Каталог: "catalog",
  Корзина: "basket",
  "О нас": "info",
};

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const sectionHome = useAppSelector((state) => state.navSection.section);
  console.log(sectionHome);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setHasShadow((prev) => {
        if (prev !== isScrolled) {
          return isScrolled;
        }
        return prev; // не вызывает перерендер
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const text = e.currentTarget.textContent?.trim();
    if (text && sectionMap[text]) {
      dispatch(setSection(sectionMap[text]));
    }
  };

  return (
    <div className={`${cls.nav__wrapper} ${hasShadow ? cls.shadow : ""}`}>
      <div className={`${cls.nav} container`}>
        <div className={cls["nav__logo"]}>
          <h2 className={cls["nav__name"]}>Teknova</h2>
          <img className={cls["nav__img"]} src={logoIcon} alt="" />
        </div>
        <ul className={cls["nav__list"]}>
          {Object.entries(sectionMap).map(([label, section]) => (
            <li className={cls["nav__item"]} key={section}>
              <a
                className={`${cls.nav__link} ${
                  sectionHome === section ? cls.active : ""
                }`}
                href="#"
                onClick={(e) => onClick(e)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
