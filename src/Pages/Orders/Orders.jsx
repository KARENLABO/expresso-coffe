import { useContext } from "react";

import { DataContext } from "../../ContextProvider/ContextProvider";
import { Content } from "../../Components";

import SummaryTable from "./components/SummaryTable";

import "./styles.scss";

function Orders() {
  const { usersOrders } = useContext(DataContext);
  return (
    <div className="orders">
      <Content title="Coffee Orders">
        {usersOrders ? (
          <SummaryTable usersOrders={usersOrders} itemsPerPage={3} />
        ) : null}
      </Content>
    </div>
  );
}

export default Orders;
