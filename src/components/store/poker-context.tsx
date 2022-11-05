import React, { useState } from "react";

interface PokerContextObj {
  page: string;
  changePage: (text: string) => void;
}

export const PokerContext = React.createContext<PokerContextObj>({
  page: "welcomePage",
  changePage: (text: string) => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PokerContextProvider = ({ children }: ContextProps) => {
  const [page, setPage] = useState<string>("welcomePage");

  const changePage = (page: string): void => {
    setPage(page);
  };
  const contextValue: PokerContextObj = {
    page: page,
    changePage: changePage,
  };
  return (
    <PokerContext.Provider value={contextValue}>
      {children}
    </PokerContext.Provider>
  );
};
export default PokerContextProvider;
