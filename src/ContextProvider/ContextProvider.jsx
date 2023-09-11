import { useEffect, useState } from "react";
import { createContext } from "react";

import orders from "../data/orders.json";
import prices from "../data/prices.json";
import payments from "../data/payments.json";

import {
  transformData,
  addNewPropertiesToJson,
  groupOrdersByUser,
  groupAmounts,
  joinProperties,
} from "../Helpers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState();
  const [pricesData, setPricessData] = useState();
  const [PaymentsData, setPaymentsData] = useState();
  const [usersOrders, setUsersOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setOrdersData(orders);
      setPricessData(prices);
      setPaymentsData(payments);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // Transform data before passing it to the component after the app bring the data

    if (!isLoading) {
      const formattedOrders = addNewPropertiesToJson(ordersData, pricesData);
      const transformedOrders = transformData(
        formattedOrders,
        "drink",
        "supermochacrapucaramelcream",
        "Mocha caramel"
      );

      const orders = groupOrdersByUser(transformedOrders);
      const agroupedAmounts = groupAmounts(PaymentsData);
      const completeCustomerInfo = joinProperties(orders, agroupedAmounts);
      setUsersOrders(completeCustomerInfo);
    }
  }, [PaymentsData, isLoading, ordersData, pricesData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <DataContext.Provider value={{ usersOrders }}>
      {children}
    </DataContext.Provider>
  );
};
