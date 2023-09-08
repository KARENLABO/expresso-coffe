import products from "../../data/prices.json";
import { Content } from "../../Components";
import { Table } from "./Components";
import "./styles.scss";

function Menu() {
  return (
    <div className="menu">
      <Content title="OUR MENU">
        <Table products={products} />
      </Content>
    </div>
  );
}

export default Menu;
