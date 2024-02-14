import {
  ExpesneandIncome,
  LatestSpending,
  PremiumData,
} from "@/config/DummyData";
import ExpenseItem from "./expenseItem";
import VerticalLine from "./verticalLine";
import ProgressBar from "./progressBar";
import Card from "../Layouts/Card/Card";
import CardHeader from "../Layouts/Card/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Statistic/Statistic.module.css";
import { SpendType } from "../../../types";
import LatestSpendItem from "./latestSpendItem";
import PremiumItem from "./premiumItem";

export default function Statistic() {
  return (
    <div className={`padding flex-col justify-space-between ${styles.layout}`}>
      <Card option="border">
        <div className="flex-col gap">
          <CardHeader>
            <h3 className="font-medium">Expenses and income</h3>
          </CardHeader>
          <div className="flex-row justify-space-between">
            <ExpenseItem
              title="Expense"
              percent={ExpesneandIncome.ExpensePercent}
              value={ExpesneandIncome.ExpenseValue}
              option="text-left"
            />
            <VerticalLine />
            <ExpenseItem
              title="Income"
              percent={ExpesneandIncome.IncomePercent}
              value={ExpesneandIncome.IncomeValue}
              option="text-right"
            />
          </div>
          <ProgressBar percent={70} />
        </div>
      </Card>
      <Card option="border">
        <div className="flex-col gap">
          <CardHeader>
            <h3 className="font-medium my-auto">Latest spending</h3>
            <button
              className={`radius-full cursor-pointer ${styles.btn} btn-transparent`}
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className={`${styles.icon}`}
              />
            </button>
          </CardHeader>
          <div className="flex-col gap">
            {LatestSpending.map((item: SpendType, index: number) => (
              <LatestSpendItem key={"latest-spending-" + index} item={item} />
            ))}
          </div>
          <button className="btn-underline text-primary flex-row justify-center gap-xs">
            <p>View all</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`${styles.icon} my-auto`}
            />
          </button>
        </div>
      </Card>
      <Card option="border">
        <div className="flex-col gap">
          <CardHeader>
            <h3 className="text-center grow">Go to premium</h3>
          </CardHeader>
          <PremiumItem
            image={PremiumData.Image}
            header={PremiumData.Header}
            description={PremiumData.Description}
          />
          <button
            className={`btn-primary padding text-normal rounded ${styles["btn-white"]}`}
          >
            Get now
          </button>
        </div>
      </Card>
    </div>
  );
}
