import "./styles.css";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Datadraw from "../src/Components/TableContainer/Datadraw";
import TableData from "./TableData";
import TextEditor from "./TextEditor";
import EditorControls from "./EditorControls";
import DefaulsQueries from "./DefaulsQueries";
import GetTableInfo from "../src/Hooks/useGetTabsHook";
export default function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState(GetTableInfo(1).tableRows);
  const [headers, setHeaders] = useState(GetTableInfo(1).tableHeaders);
  const [query, setQuery] = useState("select * from customers;");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }
  console.log({ query });
  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    } else if (value.toLowerCase() === "select * from country;") {
      setDefaults(5);
    } else if (value.toLowerCase() === "select * from dress;") {
      setDefaults(6);
    } else {
      setDefaults("");
    }
  }, [value]);
  return (
    <div className="bg-gray">
      <div className="dFlex ">
        <div className="defaultQueries">
          <DefaulsQueries
            setValue={setValue}
            value={value}
            setDefaults={setDefaults}
          />
        </div>
        <div className="dFlex flex_8">
          <div className="inputContainer">
            <div className="dFlex space-between items-center">
              <h5 className="font-bold text-center mx-4">Input</h5>
              <EditorControls
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            <TextEditor value={value} setValue={setValue} />
            <TableData
              query={query}
              headers={headers}
              rows={rows}
              csvData={csvData}
            />
          </div>
        </div>
      </div>
      {/* 
      <div className="w-full lg:w-3/12">
        <Datadraw />
      </div> */}

      <Toaster
        position="bottom-left"
        gutter={8}
        toastOptions={{
          duration: 3000
        }}
      />
    </div>
  );
}
