import { useWindowSize } from "react-use";

export function useIsWidth(maxWidth: number): boolean {
  const { width } = useWindowSize();
  if (typeof width !== "number") {
    return false;
  }

  return width < maxWidth;
}
