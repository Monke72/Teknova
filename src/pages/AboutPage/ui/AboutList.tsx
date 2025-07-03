import cls from "./AboutList.module.scss";

const AboutTeknova = () => {
  return (
    <section className={`${cls.about} container`}>
      <div className={cls.about__container}>
        <h2 className={cls.about__title}>О нас</h2>
        <p className={cls.about__intro}>
          <strong>Teknova</strong> — это современный онлайн-магазин электроники,
          созданный для тех, кто ценит качество, надёжность и технологические
          новинки. Мы предлагаем не просто технику, а умные решения для вашей
          повседневной жизни.
        </p>

        <div className={cls.about__info}>
          <div className={`${cls["about__info-wrapper"]} ${cls.about__center}`}>
            <h3 className={cls.about__subtitle}>🛒 Что вы найдёте у нас</h3>
            <ul className={cls.about__list}>
              <li className={cls.about__item}>
                Смартфоны, ноутбуки и планшеты
              </li>
              <li className={cls.about__item}>
                Наушники, колонки и умные часы
              </li>
              <li className={cls.about__item}>
                Техника для дома и умные устройства
              </li>
              <li className={cls.about__item}>Аксессуары и комплектующие</li>
              <li className={`${cls.about__item} ${cls.strong}`}>
                Только оригинальные устройства от проверенных брендов
              </li>
            </ul>
          </div>
          <div className={cls["about__subtitle-wrapper"]}>
            <div className={cls.about__info__wrapper}>
              <h3 className={cls.about__subtitle}>
                🎧 Почему выбирают Teknova
              </h3>
              <ul className={cls.about__list}>
                <li className={cls.about__item}>
                  <strong>Гарантия на всю технику.</strong> Все товары
                  поставляются с официальной гарантией — от 6 до 24 месяцев. Мы
                  ценим ваше спокойствие и всегда готовы помочь с ремонтом или
                  обменом.
                </li>
                <li className={cls.about__item}>
                  <strong>Официальные поставки.</strong> Никаких серых схем —
                  только оригинальная продукция от сертифицированных
                  дистрибьюторов.
                </li>
                <li className={cls.about__item}>
                  <strong>Быстрая доставка.</strong> Отправка по всей России за
                  1–3 дня, пунктуально и аккуратно.
                </li>
                <li className={cls.about__item}>
                  <strong>Живой сервис.</strong> Поддержка на всех этапах — от
                  выбора до возврата. Поможем подобрать, объясним нюансы и не
                  исчезнем после оплаты.
                </li>
                <li className={cls.about__item}>
                  <strong>Удобство и честность.</strong> Простой интерфейс,
                  актуальные цены и никаких скрытых комиссий.
                </li>
              </ul>
            </div>
            <div className={cls.about__info__wrapper}>
              <h3 className={cls.about__subtitle}>🛠 Сервис и забота</h3>
              <ul className={cls.about__list}>
                <li className={cls.about__item}>
                  Мы не просто продаём технику — мы сопровождаем вас на каждом
                  этапе.
                </li>
                <li className={cls.about__item}>
                  На всё оборудование предоставляется официальная гарантия.
                </li>
                <li className={cls.about__item}>
                  При необходимости обеспечиваем быструю замену или ремонт через
                  наш сервисный центр.
                </li>
                <li className={cls.about__item}>
                  Бесплатные консультации как до покупки, так и после — всегда
                  готовы помочь.
                </li>
                <li className={cls.about__item}>
                  Честный возврат без лишних вопросов и сложностей.
                </li>
              </ul>

              <p className={cls.about__text}>
                Мы стремимся к долгосрочным отношениям и вашему доверию, а не к
                одноразовой продаже.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeknova;
