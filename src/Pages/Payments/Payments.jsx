import { useContext } from "react";

import { DataContext } from "../../ContextProvider/ContextProvider";
import { Content } from "../../Components";
import SummaryTable from "./Components/SummaryTable";

import "./styles.scss";

function Payments() {
  const { usersOrders } = useContext(DataContext);

  return (
    <div className="payments">
      <Content title="Customers Balance">
        <SummaryTable data={usersOrders} itemsPerPage={5} />
      </Content>
    </div>
  );
}

export default Payments;
