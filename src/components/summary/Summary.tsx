import React from "react";

import SummaryBox from "./SummaryBox";
import { useTranslation } from "react-i18next";
import classes from "./Summary.module.scss";
import { IsummData } from "../../interfaces/IsummData";

const summaryData: IsummData[] = [
  {
    text: "Attendance",
    amount: "salesAmount",
    color:"#00a0b5"
  },
  {
    text: "thisMonthOrders",
    amount: "orderAmount",
    color:"#00ab53"
  },
  {   
    text: "thisMonthRevenue",
    amount: "revenueAmount",
    color:"#e83149"
  },
];

function Summary() {
  const { t } = useTranslation();
  return (
    <section className={classes.summary}>
      <p className="subTitle">{t("summary")}</p>
      <div className={classes.summary__box}>
        {summaryData.map((item) => (
          <SummaryBox key={item.text} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Summary;
