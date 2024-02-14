import Card from "../Layouts/Card/Card";
import Transaction from "./transaction";

export default function Transactions() {
  return (
    <Card option="bg-white grow overflow-auto">
      <div className="flex-col gap-sm">
        <div className="flex-row gap">
          <h3 className="font-medium">Last transactions</h3>
          <div className="grow"></div>
          <button className="btn-underline">Newest</button>
          <button className="btn-underline">Oldest</button>
        </div>
        <hr />
        <Transaction
          avatar="https://i.pravatar.cc/150?u=a04258114e29026302d"
          date="02 july,2023"
          money="-$3,000"
          name="Bessie Cooper"
        />
        <Transaction
          avatar="https://i.pravatar.cc/150?u=a04258114e29026702d"
          date="02 july,2023"
          money="-$1,970"
          name="Guy Hawkins"
        />
        <Transaction
          avatar="https://i.pravatar.cc/150?u=a04258114e29026302d"
          date="02 july,2023"
          money="-$5,000"
          name="Floyd Miles"
        />
         <Transaction
          avatar="https://i.pravatar.cc/150?u=a04258114e29026302d"
          date="02 july,2023"
          money="-$5,000"
          name="Floyd Miles"
        />
      </div>
    </Card>
  );
}
