import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '@/styles/Dashboard/Dashboard.module.css'

type props = {
  name: string;
};

export default function SelectItem({ name }: props) {
  return (
    <div className="bg-gray-light flex-row gap-xs padding-sm rounded-sm">
      <input type="checkbox" />
      <p className="text-md grow my-auto">{name}</p>
      <button
        className={`radius-full cursor-pointer btn-transparent ${styles.btn}`}
      >
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className={`${styles['dot-icon']}`}
        />
      </button>
    </div>
  );
}
