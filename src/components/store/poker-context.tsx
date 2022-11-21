import React, { useState } from "react";

interface PokerContextObj {
  page: string;
  changePage: (text: string) => void;
  roundDuration: number;
  setCurrentRoundTime: (time: number) => void;
}

export const PokerContext = React.createContext<PokerContextObj>({
  page: "",
  changePage: (text: string) => {},
  roundDuration: 300,
  setCurrentRoundTime: (time: number) => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PokerContextProvider = ({ children }: ContextProps) => {
  const [page, setPage] = useState<string>("welcomePage");
  const [roundDuration, setRoundDuration] = useState<number>(300);

  const changePage = (page: string): void => {
    setPage("loader");
    setTimeout(() => setPage(page), 1500);
  };

  const setCurrentRoundTime = (time: number): void => {
    setRoundDuration(time);
  };

  const contextValue: PokerContextObj = {
    page: page,
    changePage: changePage,
    roundDuration: roundDuration,
    setCurrentRoundTime: setCurrentRoundTime,
  };

  return (
    <PokerContext.Provider value={contextValue}>
      {children}
    </PokerContext.Provider>
  );
};
export default PokerContextProvider;
