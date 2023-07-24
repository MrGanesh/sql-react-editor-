# sql-react-editor-

This is a REACT SQL Editor built using ReactJs and Bootstrap.


# Demo
Try out the website : https://gtmsmy.csb.app/

# Tech Stack
React, HTML, CSS, JavaScript

# Libraries Used:
react-ace, react-csv, bootstrap, react-hot-toast

# Features
Users can get data of any of the predefined SQL queries by using Sidebar Menu.
Users can view the data of customers, products, country, suppliers, dressby using SQL query in SQL editor.
Users can download the data in CSV in just one click.
Covered edge cases and fallback support on unsupported queries.


# Predefined SQL Queries
select * from customers;
select contact_name, address,city,postal_code, country from customers limit 18;
select * from products;
select * from suppliers;
select * from country;
select * from dress;

# Lighthouse report:
<img width="773" alt="image" src="https://github.com/MrGanesh/sql-react-editor-/assets/37218217/3ff07623-7781-43dd-81b8-216b5c29b78a">
 

# Steps to run this app:

# yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
