import useFetch from "@hooks/useFetch";
import { createContext, useState } from "react";
import { TOP_RATED_TABS, TRENDING_TABS } from "@libs/constant";

// eslint-disable-next-line react-refresh/only-export-components
export const activeProvider = createContext();

const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <activeProvider.Provider value={{ active, setActive }}>
      {children}
    </activeProvider.Provider>
  );
};
export default ActiveProvider;
