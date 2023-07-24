import React from "react";
import { CSVLink } from "react-csv";
import RenderTable from "./RenderTable";

function TableData({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-600 body-font pl-4">
          <h2 className="font-bold text-center">Output</h2>
          <div className="flex w-full justify-between mt-6 lg:mt-0">
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center">
                <span className="pl-2 font-semibold queryBtn">Export CSV</span>
              </button>
            </CSVLink>
          </div>
          <RenderTable headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="flex-center h-50vh">
          Run Something & Your Output Shall Appear!
        </div>
      )}
    </div>
  );
}

export default TableData;
