type props = {
  title: string;
  percent: number;
  value: number;
  option: string;
};
export default function ExpenseItem({ title, percent, value, option }: props) {
  return (
    <div>
      <p className={`${option}`}>{title}</p>
      <p className={`${option}`}>{percent}%</p>
      <p className={`${option}`}>{value}</p>
    </div>
  );
}
