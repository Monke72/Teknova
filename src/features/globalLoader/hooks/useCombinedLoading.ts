import { useAppSelector } from "@shared/hooks/reduxHooks";
import { useEffect, useState } from "react";

export const useCombinedLoading = () => {
  const apiLoading = useAppSelector((state) => state.productsList.loading);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return apiLoading || !pageLoaded;
};
