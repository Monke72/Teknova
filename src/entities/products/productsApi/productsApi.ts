interface IProducts {
  name: string;
  price: number;
  product: string;
  category: "телефон" | "уход за собой" | "наушники" | "ноутбук" | "часы";
  division: "уход" | "электроника";
}

export const fetchProducts = async () => {
  const response = await fetch(
    `https://6821e49db342dce8004c3c69.mockapi.io/products`
  );
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};
