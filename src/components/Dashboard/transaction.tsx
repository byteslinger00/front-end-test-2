import styles from "@/styles/Dashboard/Dashboard.module.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  avatar: string;
  name: string;
  date: string;
  money: string;
};

export default function Transaction({ avatar, name, date, money }: props) {
  return (
    <div className="flex-col gap-sm">
      <div className="flex-row gap-sm">
        <img src={avatar} className={`${styles.avatar}`} alt="avatar" />
        <div className="flex-col grow">
          <p>{name}</p>
          <p className="text-gray">{date}</p>
        </div>
        <p className="my-auto">{money}</p>
        <button
          className={`radius-full my-auto cursor-pointer btn-transparent ${styles.btn}`}
        >
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={`${styles["dot-icon"]}`}
          />
        </button>
      </div>
      <hr />
    </div>
  );
}
