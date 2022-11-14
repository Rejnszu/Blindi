import React, { useContext, useState } from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import styles from "./StackConfig.module.scss";
import { PokerContext } from "../store/poker-context";

import AnimatedPages from "../UI/AnimatedPages";
import StackConfigForm from "./ConfigForm/StackConfigForm";
import CalculationLoader from "../UI/CalculationLoader";

const StackConfig = () => {
  const pokerCtx = useContext(PokerContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AnimatedPages>
      <div className={`${"default-page"}`}>
        <Header>Configure Your stacks</Header>
        <div className={styles["config-page__description"]}>
          <p>
            On this page you will configure your begginning stack for each
            player based on the informations you provide below
          </p>
        </div>
        <StackConfigForm handleLoader={setIsLoading} />
        {isLoading && <CalculationLoader />}

        <Button onClick={pokerCtx.changePage.bind(null, "game")} type="button">
          Continue
        </Button>
      </div>
    </AnimatedPages>
  );
};

export default StackConfig;
