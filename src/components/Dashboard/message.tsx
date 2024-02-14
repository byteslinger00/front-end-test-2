import styles from "@/styles/Dashboard/Dashboard.module.css";

type props = {
  avatar: string;
  message: string;
  sender: boolean;
};

export default function Message({ avatar, message, sender }: props) {
  if (sender)
    return (
      <div className="flex-row justify-end gap-xs">
        <p className={`${styles.sender}`}>{message}</p>
        <img src={avatar} className={`${styles.avatar}`} />
      </div>
    );
  else
    return (
      <div className="flex-row justify-start gap-xs">
        <img src={avatar} className={`${styles.avatar}`} />
        <p className={`${styles.receiver}`}>{message}</p>
      </div>
    );
}
