export const validatePhone = (value?: string) => {
  const cleaned = value.replace(/\D/g, "");
  return /^\d{10,15}$/.test(cleaned);
};
