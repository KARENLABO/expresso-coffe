import { Content, Table } from "../../Components";
import orders from "../../data/orders.json";
import "./styles.scss";
import { transformData } from "../../Helpers";

const columns = [
  { field: "user", title: "CUSTOMER" },
  { field: "drink", title: "DRINK" },
  { field: "size", title: "SIZE" },
];

function Orders() {
  // Transform the data before passing it to the table
  const transformedOrders = transformData(
    orders,
    "drink", // The field to verify
    "supermochacrapucaramelcream", // The value to transform
    "Mocha caramel cream" // The expected value
  );

  return (
    <div className="orders">
      <Content title="COFFEE ORDERS">
        <Table data={transformedOrders} columns={columns} />
      </Content>
    </div>
  );
}

export default Orders;
