import React from "react";

function DefaulsQueries({ setDefaults, setValue, value }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4
    },
    {
      query: "select * from products;",
      default: 2
    },
    {
      query: "select * from suppliers;",
      default: 3
    },
    {
      query: "select * from country;",
      default: 5
    },
    {
      query: "select * from dress;",
      default: 6
    }
  ];
  return (
    <div>
      <div className="">
        <div className="">
          <p className="font-bold text-lg text-center">Available Queries</p>
        </div>
        <ul className="nav-ul">
          {qurtyValue.map((item, index) => (
            <li
              key={index}
              className="nav-li cursor-pointer"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              <a className={`${value === item.query && "active"}`}>
                {item.query}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DefaulsQueries;
