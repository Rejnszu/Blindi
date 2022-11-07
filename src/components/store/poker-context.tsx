import React, { useState } from "react";

interface PokerContextObj {
  page: string;
  changePage: (text: string) => void;
  time: number;
  setCurrentRoundTime: (time: number) => void;
}

export const PokerContext = React.createContext<PokerContextObj>({
  page: "welcomePage",
  changePage: (text: string) => {},
  time: 0,
  setCurrentRoundTime: (time: number) => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PokerContextProvider = ({ children }: ContextProps) => {
  const [page, setPage] = useState<string>("welcomePage");
  const [time, setTime] = useState<number>(300);
  const changePage = (page: string): void => {
    setPage(page);
  };
  const setCurrentRoundTime = (time: number): void => {
    setTime(time);
  };
  const contextValue: PokerContextObj = {
    page: page,
    changePage: changePage,
    time: time,
    setCurrentRoundTime: setCurrentRoundTime,
  };
  return (
    <PokerContext.Provider value={contextValue}>
      {children}
    </PokerContext.Provider>
  );
};
export default PokerContextProvider;
