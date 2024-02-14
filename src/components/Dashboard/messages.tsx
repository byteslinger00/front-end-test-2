import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import Message from "./message";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function Messages() {
  return (
    <div className={`flex-col gap grow padding ${styles["list-items-layout"]}`}>
      <h3 className="font-medium">Esther Howard</h3>
      <div className={`flex-col gap ${styles.messages}`}>
        <Message
          sender
          message="Are you ready?"
          avatar="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
        <Message
          sender={false}
          message="Are you ready?"
          avatar="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <Message
          sender
          message="Are you ready?"
          avatar="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
        <Message
          sender={false}
          message="Are you ready?"
          avatar="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </div>
      <div className="bg-gray-light flex-col gap-sm padding-sm rounded">
        <textarea className="bg-gray-light border-none"></textarea>
        <div className="flex-row gap">
          <FontAwesomeIcon icon={faFaceSmile} className={`${styles.icon}`} />
          <FontAwesomeIcon icon={faPaperclip} className={`${styles.icon}`} />
          <div className="grow"></div>
          <button className={`btn-primary text-normal rounded ${styles['btn-white']}`}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}
