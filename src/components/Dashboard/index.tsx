import { DashboardData, UserInfo } from "@/config/DummyData";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import Card from "../Layouts/Card/Card";
import CardHeader from "../Layouts/Card/CardHeader";
import BalanceStatistics from "./balancestatistic";
import CreditCard from "./creditCard";
import Info from "./info";
import WalletInfo from "./walletInfo";

export default function Dashboard() {
  return (
    <div className={`flex-col gap grow padding ${styles.layout}`}>
      <h1>Hello, {UserInfo.Name}</h1>
      <p>{DashboardData.Description}</p>
      <div className="flex-row gap">
        <BalanceStatistics />
        <CreditCard
          image={DashboardData.Card.Image}
          expireat={DashboardData.Card.ExpireTime}
          name={UserInfo.FullName}
          number={DashboardData.Card.Number}
        />
      </div>
      <Info />
      <WalletInfo />
    </div>
  );
}
