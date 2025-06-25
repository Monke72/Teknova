export interface IUserState {
  password: string;
  entry: boolean;
  mail: string;
}
export interface IProducts {
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
}
