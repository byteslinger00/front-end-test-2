import styles from "@/styles/Statistic/Statistic.module.css";

type props = {
  header: string;
  image: string;
  description: string;
};

export default function PremiumItem({ header, image, description }: props) {
  return (
    <div className="flex-col gap-xs">
      <img
        src={image}
        alt="premium"
        className={`${styles.logo}`}
      />
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}
