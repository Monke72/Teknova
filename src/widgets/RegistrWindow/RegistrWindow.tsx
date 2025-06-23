import { useAppDispatch } from "@app/Provider";
import { setEntry, setPasswordReg, setTelReg } from "@features/Auth/slice";
import { setSection } from "@features/Navigation/slice";
import { passwordValid } from "@shared/utils/passwordValid/passwordValid";
import { validatePhone } from "@shared/utils/telValid/telValid";
import React, { useState } from "react";
import logoIcon from "@shared/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import cls from "./RegistrWindow.module.scss";

const RegistrWindow = () => {
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneIsValid = validatePhone(phone);
    const passwordIsValid = passwordValid(password);

    setPasswordError(
      passwordIsValid
        ? ""
        : "Пароль должен содержать 8 символов, цифры и заглавные буквы"
    );
    setPhoneError(phoneIsValid ? "" : "Неккоректный номер телефона");

    if (phoneIsValid && passwordIsValid) {
      dispatch(setPasswordReg(password));
      dispatch(setTelReg(phone));
      dispatch(setEntry(true));
      dispatch(setSection("main"));

      navigate("/");
    }
  };

  return (
    <div className={cls.reg__form}>
      <form className={cls.reg} onSubmit={(e) => handleSubmit(e)}>
        <div className={cls.reg__name}>
          <h2>Teknova</h2>
          <img className={cls.reg__logo} src={logoIcon} alt="" />
        </div>
        <div className={cls.reg__text}>
          Твоя техника — твой стиль. Начни с регистрации!
        </div>
        <label htmlFor="phone" className={cls["reg__input-wrappper"]}>
          <input
            id="phone"
            value={phone}
            className={cls.reg__input}
            type="text"
            onChange={changeEmail}
            placeholder="Номер телефона"
          />
          {phoneError && <span className={cls.reg__error}>{phoneError}</span>}
        </label>
        <label htmlFor="password" className={cls["reg__input-wrappper"]}>
          <input
            className={cls.reg__input}
            id="password"
            value={password}
            type="password"
            onChange={changePassword}
            placeholder="Пароль"
          />
          {passwordError && (
            <span className={cls.reg__error}>{passwordError}</span>
          )}
        </label>
        <button className={cls.reg__button} type="submit">
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default RegistrWindow;
