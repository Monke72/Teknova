export interface IUserState {
  password: string;
  entry: boolean;
  mail: string;
}
export enum ProductCartStyle {
  All = "all",
  Popular = "popular",
  Basket = "basket",
}
export interface IProducts {
  aviability: boolean;
  id: number;
  name: string;
  price: number;
  product: string;
  category: "телефон" | "уход за собой" | "наушники" | "ноутбук" | "часы";
  division: "уход" | "электроника";
  producer: string;
  sale?: number;
  image: string;
  popular: boolean;
  styleType?: ProductCartStyle;
}
