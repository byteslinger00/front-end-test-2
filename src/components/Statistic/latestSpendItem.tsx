import { SpendType } from "../../../types";
import styles from "@/styles/Statistic/Statistic.module.css";

type props = {
  item: SpendType;
};

export default function LatestSpendItem({ item }: props) {
  return (
    <div className="flex-col gap">
      <div className="flex-row gap">
        <img
          src={item.Image}
          alt="latest-spend-image"
          className={`${styles.img}`}
        />
        <div className="flex-col justify-center">
          <p>{item.Title}</p>
          <p className={`${styles.description} text-gray`}>{item.Date}</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}
