import React, { useContext } from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import styles from "./StackConfig.module.scss";
import { PokerContext } from "../store/poker-context";

import AnimatedPages from "../UI/AnimatedPages";
import StackConfigForm from "./ConfigForm/StackConfigForm";

const StackConfig = () => {
  const pokerCtx = useContext(PokerContext);

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
        <StackConfigForm />
        <Button onClick={pokerCtx.changePage.bind(null, "game")} type="button">
          Continue
        </Button>
      </div>
    </AnimatedPages>
  );
};

export default StackConfig;
