import Card from "../Layouts/Card/Card";
import ItemList from "./itemList";
import Messages from "./messages";

export default function Info() {
  return (
    <Card option="bg-white" nopadding>
      <div className="flex-row">
        <ItemList />
        <Messages />
      </div>
    </Card>
  );
}
