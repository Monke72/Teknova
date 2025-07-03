import cls from "./Footer.module.scss";
import { useAppDispatch } from "@shared/hooks/reduxHooks";
import { setText } from "@shared/store/slices/textSlice";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchByText = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const text = e.currentTarget.textContent;
    dispatch(setText(text));
    navigate("/catalog");
    window.scrollTo(0, 0);
  };
  return (
    <footer className={cls.footer}>
      <div className={`${cls.footer__wrapper} container`}>
        <div className={cls.footer__popular}>
          <ul className={cls.popular__list}>
            <li className={cls.popular__item}>
              <a
                href="#"
                className={cls.popular__link}
                onClick={(e) => searchByText(e)}
              >
                Iphone 16 Pro Max
              </a>
            </li>
            <li className={cls.popular__item}>
              <a
                href="#"
                className={cls.popular__link}
                onClick={(e) => searchByText(e)}
              >
                Acer Swift 3
              </a>
            </li>
            <li className={cls.popular__item}>
              <a
                href="#"
                className={cls.popular__link}
                onClick={(e) => searchByText(e)}
              >
                Samsung Galaxy Z Flip 5
              </a>
            </li>
            <li className={cls.popular__item}>
              <a
                href="#"
                className={cls.popular__link}
                onClick={(e) => searchByText(e)}
              >
                MacBook Pro 14
              </a>
            </li>
            <li className={cls.popular__item}>
              <a
                href="#"
                className={cls.popular__link}
                onClick={(e) => searchByText(e)}
              >
                Google Pixel 6
              </a>
            </li>
          </ul>
        </div>

        <div className={cls.footer__contacts}>
          <ul className={cls.contacts__list}>
            <li className={cls.contacts__item}>
              <a href="tel:+78462192495" className={cls.contacts__link}>
                +7 (846) 219-24-95
              </a>
            </li>
            <li className={cls.contacts__item}>
              <a href="mailto:teknava@mail.ru" className={cls.contacts__link}>
                teknava@mail.ru
              </a>
            </li>
            <li className={cls.contacts__item}>
              <a
                href="mailto:teknava@mail.ru"
                className={`${cls.contacts__link} ${cls.dis}`}
              >
                ул. Ново-Садовая, 106, БЦ «ЗиМ», этаж 1 Пн. – Вс.: с 9:00 до
                21:00
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
