import styles from "@/styles/Dashboard/Dashboard.module.css";
import Card from "../Layouts/Card/Card";

type props = {
  image: string;
  number: string;
  name: string;
  expireat: string;
};

export default function CreditCard({ image, number, name, expireat }: props) {
  return (
    <Card option={`bg-white relative `} nopadding hidden>
      <img src={image} alt="Card Image" className={`${styles.card}`} />
      <div className={`absolute flex-col gap-sm ${styles["card-description"]}`}>
        <p>{number}</p>
        <div className="flex-row justify-space-between">
          <p>{name}</p>
          <p>{expireat}</p>
        </div>
      </div>
    </Card>
  );
}
