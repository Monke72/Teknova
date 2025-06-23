import cls from "./NotFound.module.scss";
import { MehOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
interface InotFound {
  error: number;
}

const errorContent: Record<
  number,
  { text: string; link: string; linkText: string }
> = {
  500: {
    text: "Что-то пошло не так на сервере 🔧",
    link: "/",
    linkText: "Написать в поддержку",
  },
  403: {
    text: "Зарегестрируйте аккаунт 👀",
    link: "/",
    linkText: "Вернуться на страницу регистрации",
  },
  404: {
    text: "Ты дошёл до конца интернета… или просто не туда свернул 🐾",
    link: "/",
    linkText: "Вернёмся домой?",
  },
};

const NotFound = ({ error }: InotFound) => {
  const { text, link, linkText } = errorContent[error];
  return (
    <section className={cls.not}>
      <div className={cls.not__wrapper}>
        <MehOutlined
          style={{ fontSize: "110px", color: "var(--color-blue-light)" }}
        />
        <h1 className={cls.not__error}>{error}</h1>
        <p className={cls.not__text}>
          {text}
          <br />
          <Link className={cls.not__link} to={link}>
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
