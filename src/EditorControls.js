import React from "react";
import toast from "react-hot-toast";
import GetTableInfo from "./Hooks/useGetTabsHook";

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value
}) {
  const runQuery = () => {
    setQuery(value);
    if ([1, 2, 3, 4, 5, 6].includes(defaults)) {
      const { tableHeaders, tableRows } = GetTableInfo(defaults);
      setHeaders(tableHeaders);
      setRows(tableRows);
      const temp = [];
      if (tableHeaders.length > 0 && tableRows.length > 0) {
        temp.push(tableHeaders);
        tableRows.forEach((row) => {
          temp.push(row);
        });
        console.log({ temp });
        setCSVData(temp);
        if (temp.length > 0) {
          toast.success("Query run");
        } else {
          toast.error("This didn't work.");
        }
      }
    } else {
      toast.error("No table found in our DB.");
      setQuery("");
      setDefaults("");
      setHeaders([]);
      setRows([]);
    }
  };

  const reset = () => {
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };
  return (
    <div className="dFlex space-between items-center ">
      <div className="p-2">
        <button
          onClick={runQuery}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <div className="font-bold font-mono queryBtn">Run Query</div>
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={reset}
          className=" queryBtn flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          {" "}
          <div className="font-bold font-mono queryBtn">Reset</div>{" "}
        </button>
      </div>
    </div>
  );
}

export default Buttons;
