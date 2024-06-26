import { useState } from "react";
import Button from "./components/Button";
import Like from "./components/Like";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "St. Louis"]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>
      </div>
      <div>
        <Like onClick={() => console.log("clicked")}></Like>
      </div>
    </>
  );
}

export default App;
