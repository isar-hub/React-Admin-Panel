import React from "react";
import { useTranslation } from "react-i18next";
import { IsummData as Props } from "../../interfaces/IsummData";
import { Icon } from "@iconify/react";
import Card from "../UI/card/Card";
import classes from "./SummaryBox.module.scss";
const SummaryBox: React.FC<{ item: Props }> = (props) => {
  const { t } = useTranslation();
  const boxStyle = {
    backgroundColor: props.item.color,
  }
  return (
    <div className={classes.summary__box} >
      <Card >
        <div className={classes.summary__box__wrapper} >
          <div className={classes.summary__box__info}>
            <p>{t(props.item.text)}</p>
            <div className={classes.summary__box__info__amount}>
              <h4>{t(props.item.amount)}</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SummaryBox;
