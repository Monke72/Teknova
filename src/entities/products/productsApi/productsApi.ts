export const fetchProducts = async () => {
  const response = await fetch(
    `https://6821e49db342dce8004c3c69.mockapi.io/products`
  );
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};
