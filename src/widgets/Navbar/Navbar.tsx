import logoIcon from "@shared/assets/logo.svg";
import cls from "./navbar.module.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import { NavSectionType } from "@features/Navigation/model/slice";

const sectionMap: Record<string, NavSectionType> = {
  Главная: "main",
  Каталог: "catalog",
  Корзина: "basket",
  "О нас": "about",
};

const sectionToPathMap: Record<NavSectionType, string> = {
  main: "/",
  catalog: "/catalog",
  basket: "/basket",
  about: "/about",
};

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = useAppSelector((state) => state.navSection.section);
  const sect = useAppSelector((state) => state.navSection.section);
  console.log("sect", sect);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setHasShadow((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionKey: NavSectionType
  ) => {
    e.preventDefault();
    const path = sectionToPathMap[sectionKey];
    if (location.pathname !== path) {
      navigate(path);
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
          {Object.entries(sectionMap).map(([label, sectionKey]) => (
            <li className={cls["nav__item"]} key={sectionKey}>
              <a
                href={sectionToPathMap[sectionKey]}
                onClick={(e) => onClick(e, sectionKey)}
                className={`${cls.nav__link} ${
                  currentSection === sectionKey ? cls.active : ""
                }`}
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
