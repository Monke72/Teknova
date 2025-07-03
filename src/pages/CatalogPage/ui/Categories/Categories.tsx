import { CategorieType } from "@pages/CatalogPage/types/types";
import cls from "./Categories.module.scss";

interface CategoriesProps {
  category: CategorieType;
  setCategory: (cat: CategorieType) => void;
}

const categories: { key: CategorieType; label: string }[] = [
  { key: "popular", label: "Популярные товары" },
  { key: "all", label: "Все товары" },
];

const Categories = ({ category, setCategory }: CategoriesProps) => {
  return (
    <div className={`container ${cls.categories}`}>
      <ul className={cls.categories__list}>
        {categories.map(({ key, label }) => (
          <li
            key={key}
            className={
              category === key
                ? `${cls.categories__item} ${cls.active}`
                : cls.categories__item
            }
          >
            <a
              className={cls.categories__link}
              onClick={() => setCategory(key)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
