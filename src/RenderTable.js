import React from "react";

function RenderTable({ headers, rows }) {
  return (
    <div className="table-parent">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="border-t-2 border-gray-200 py-2 text-sm td-item"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RenderTable;
