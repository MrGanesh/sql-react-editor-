import React from "react";
import Table from "./Table";
import { customers } from "../../Database/customers";
import { suppliers } from "../../Database/suppliers";
import { products } from "../../Database/product";
import { countryList } from "../../Database/country";
import { dress } from "../../Database/dress";
function Datadraw() {
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <Table tableHead={customers[0]} tableName="customers" tableNo={1} />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <Table tableHead={suppliers[0]} tableName="suppliers" tableNo={2} />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <Table tableHead={products[0]} tableName="products" tableNo={3} />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <Table tableHead={countryList[0]} tableName="products" tableNo={4} />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <Table tableHead={dress[0]} tableName="products" tableNo={5} />
    </div>
  );
}

export default Datadraw;
