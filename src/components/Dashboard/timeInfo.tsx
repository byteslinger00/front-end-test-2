type props = {
  time: string;
  date: string;
};

export default function TimeInfo({ time, date }: props) {
  return (
    <div>
      <p className="font-medium text-lg">{time}</p>
      <p className="text-md text-gray">{date}</p>
    </div>
  );
}
