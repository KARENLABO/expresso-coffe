import { Content } from "../../Components";
import orders from "../../data/orders.json";
import prices from "../../data/prices.json";
import "./styles.scss";
import {
  transformData,
  addNewPropertiesToJson,
  groupOrdersByUser,
} from "../../Helpers"; // Importa la función de transformación
import SummaryTable from "./components/SummaryTable";

const newJson = addNewPropertiesToJson(orders, prices);

function Orders() {
  // Transform data before passing it to the table
  const transformedOrders = transformData(
    newJson,
    "drink", // The field to verify
    "supermochacrapucaramelcream", // The value to transform
    "Mocha caramel" // The expected value
  );
  const usersOrders = groupOrdersByUser(transformedOrders);

  return (
    <div className="orders">
      <Content title="COFFEE ORDERS">
        <SummaryTable usersOrders={usersOrders} itemsPerPage={3} />
      </Content>
    </div>
  );
}

export default Orders;
