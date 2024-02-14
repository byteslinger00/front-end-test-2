import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeInfo from "./timeInfo";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import SelectItem from "./selectItem";

export default function ItemList() {
  return (
    <div className={`flex-col gap grow padding ${styles['list-items-layout']}`}>
      <h3 className="font-medium">List of items to buy</h3>
      <div className="flex-row gap-lg">
        <TimeInfo time="02:00" date="Sat, August 12" />
        <FontAwesomeIcon icon={faAngleRight} className={`${styles.icon}`} />
        <TimeInfo time="05:00" date="Sat, September 12" />
      </div>
      <div className="flex-row justify-space-between">
        <p>
          <span className="text-gray">0/3</span> Shopping list
        </p>
        <button className="btn-underline">+ Add an item</button>
      </div>
      <div className="grid-cols-2 gap-sm">
        <SelectItem name="MacBook" />
        <SelectItem name="MacBook" />
        <SelectItem name="MacBook" />
        <SelectItem name="MacBook" />
      </div>
    </div>
  );
}
