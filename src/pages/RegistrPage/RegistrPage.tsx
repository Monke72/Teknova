import RegistrWindow from "@widgets/RegistrWindow/RegistrWindow";
import cls from "./RegistrPage.module.scss";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import { Link } from "react-router-dom";

const RegistrPage = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  return (
    <section className={`${cls.registr} container`}>
      {entry ? (
        <>
          <h1>Вы зарегестрированы😊</h1>
          <Link to={"/"}>
            <button className={cls["registr__btn-home"]}>
              Вернемся на главную страницу?
            </button>
          </Link>
        </>
      ) : (
        <RegistrWindow />
      )}
    </section>
  );
};

export default RegistrPage;
