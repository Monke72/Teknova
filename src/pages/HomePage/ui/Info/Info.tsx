import cls from "./Info.module.scss";

const infoItems = [
  {
    title: "Широкий ассортимент техники",
    text: `В Teknova вы найдёте только проверенные и современные гаджеты от
           ведущих производителей — от смартфонов и ноутбуков до умных
           устройств для дома.`,
  },
  {
    title: "Гарантия качества и надежности",
    text: `Мы тщательно отбираем товары, чтобы вы получали только
           сертифицированную технику с официальной гарантией и поддержкой.`,
  },
  {
    title: "Выгодные цены и акции",
    text: `Регулярные скидки и специальные предложения помогут вам приобрести
           технику мечты по оптимальной стоимости.`,
  },
  {
    title: "Профессиональная консультация и поддержка",
    text: `Наши эксперты всегда готовы помочь выбрать устройство, исходя из
           ваших потребностей, и ответить на все вопросы.`,
  },
  {
    title: "Быстрая доставка и удобный сервис",
    text: `Доставка по всей стране в кратчайшие сроки, а удобные способы
           оплаты и возврата делают покупку комфортной и безопасной.`,
  },
];

const Info = () => {
  return (
    <section className={`${cls.info} container`}>
      <h1 className={cls.info__title}>Почему выбирают нас</h1>
      <div className={cls.info__wrapper}>
        <ul className={cls.info__list}>
          {infoItems.map(({ title, text }, index) => (
            <li key={index} className={cls.info__item}>
              <h3 className={cls["info__item-title"]}>{title}</h3>
              <p className={cls["info__item-text"]}>{text}</p>
            </li>
          ))}
        </ul>
        <div className={cls.info__image}></div>
      </div>
    </section>
  );
};

export default Info;
