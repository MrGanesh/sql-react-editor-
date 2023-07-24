import { customers } from "../Database/customers";
import { suppliers } from "../Database/suppliers";
import { products } from "../Database/product";
import { select_customer } from "../Database/select_customer";
import { countryList } from "../Database/country";
import { dress } from "../Database/dress";
export default function GetTableInfo(data) {
  let infoStore = null;
  if (data === 1) {
    infoStore = customers;
  } else if (data === 2) {
    infoStore = suppliers;
  } else if (data === 3) {
    infoStore = products;
  } else if (data === 4) {
    infoStore = select_customer;
  } else if (data === 5) {
    infoStore = countryList;
  } else if (data === 6) {
    infoStore = dress;
  }
  let tableHeaders = [];
  let tableRows = [];
  for (var i = 0; i < infoStore.length; i++) {
    const row = infoStore[i];
    if (i === 0) {
      for (const item in row) {
        tableHeaders.push(row[item]);
      }
    } else {
      let temp = [];
      for (const item in row) {
        temp.push(row[item]);
      }
      tableRows.push(temp);
    }
  }
  return { tableHeaders, tableRows };
}
