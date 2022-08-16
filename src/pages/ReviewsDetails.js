import React, { useState, useEffect } from "react";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import './Reviewsdetail.css';

export default function App() {
  const datatableUsers = [
  {
    "name": "Name",
    "position": "Description",
    "gender": "Time",
    "id": 1 },

  {
    "name": "Chrissie MacInerney",
    "position": "Account Executive",
    "gender": "Male",
    "id": 2 },

  {
    "name": "Karly Okeshott",
    "position": "Cost Accountant",
    "gender": "Female",
    "id": 3 },

  {
    "name": "Hermia Dayton",
    "position": "VP Sales",
    "gender": "Female",
    "id": 4 },

  {
    "name": "Willem O'Hdirscoll",
    "position": "Recruiting Manager",
    "gender": "Female",
    "id": 5 },

  {
    "name": "Jose Caswall",
    "position": "Environmental Tech",
    "gender": "Female",
    "id": 6 },

  {
    "name": "Cal Russell",
    "position": "Computer Systems Analyst II",
    "gender": "Female",
    "id": 7 },

  {
    "name": "Lavinia Atwill",
    "position": "Occupational Therapist",
    "gender": "Male",
    "id": 8 },

  {
    "name": "Sophronia De Hooch",
    "position": "Account Representative II",
    "gender": "Female",
    "id": 9 },

  {
    "name": "Harmon Argente",
    "position": "Media Manager IV",
    "gender": "Male",
    "id": 10 },

  {
    "name": "Andreana Hablot",
    "position": "Geological Engineer",
    "gender": "Male",
    "id": 11 },

  {
    "name": "Elbertina Hinnerk",
    "position": "Account Coordinator",
    "gender": "Female",
    "id": 12 },

  {
    "name": "Dill Morrallee",
    "position": "Assistant Media Planner",
    "gender": "Female",
    "id": 13 },

  {
    "name": "Quinn Gully",
    "position": "Actuary",
    "gender": "Male",
    "id": 14 },

  {
    "name": "Edythe Comberbach",
    "position": "VP Quality Control",
    "gender": "Female",
    "id": 15 },

  {
    "name": "Marco Ferrotti",
    "position": "Business Systems Development Analyst",
    "gender": "Female",
    "id": 16 },

  {
    "name": "Trumaine Underhill",
    "position": "Data Coordiator",
    "gender": "Female",
    "id": 17 },

  {
    "name": "Mariana Trevillion",
    "position": "GIS Technical Architect",
    "gender": "Male",
    "id": 18 },

  {
    "name": "Rowney D'Almeida",
    "position": "Community Outreach Specialist",
    "gender": "Male",
    "id": 19 },

  {
    "name": "Jule Sibborn",
    "position": "Assistant Manager",
    "gender": "Female",
    "id": 20 },

  {
    "name": "Aylmer Buse",
    "position": "Occupational Therapist",
    "gender": "Male",
    "id": 21 },

  {
    "name": "Iver Echlin",
    "position": "Research Assistant II",
    "gender": "Male",
    "id": 22 },

  {
    "name": "Cordy Gason",
    "position": "Sales Associate",
    "gender": "Male",
    "id": 23 },

  {
    "name": "Laurene Haquard",
    "position": "Environmental Tech",
    "gender": "Male",
    "id": 24 },

  {
    "name": "Krysta Sudworth",
    "position": "Engineer IV",
    "gender": "Female",
    "id": 25 },

  {
    "name": "Emyle Roux",
    "position": "Project Manager",
    "gender": "Male",
    "id": 26 },

  {
    "name": "Nicky Sommerlie",
    "position": "Financial Analyst",
    "gender": "Female",
    "id": 27 },

  {
    "name": "Dominga Thaller",
    "position": "Executive Secretary",
    "gender": "Male",
    "id": 28 },

  {
    "name": "Norris Turri",
    "position": "Executive Secretary",
    "gender": "Male",
    "id": 29 },

  {
    "name": "Lora Lamb",
    "position": "Software Consultant",
    "gender": "Female",
    "id": 30 },

  {
    "name": "Darrin Petrou",
    "position": "Information Systems Manager",
    "gender": "Female",
    "id": 31 },

  {
    "name": "Batholomew Batiste",
    "position": "Food Chemist",
    "gender": "Female",
    "id": 32 },

  {
    "name": "Iain Sola",
    "position": "General Manager",
    "gender": "Female",
    "id": 33 },

  {
    "name": "Olin Ewing",
    "position": "Mechanical Systems Engineer",
    "gender": "Male",
    "id": 34 },

  {
    "name": "Barbi Liggens",
    "position": "Assistant Professor",
    "gender": "Female",
    "id": 35 },

  {
    "name": "Alisun Trowle",
    "position": "Senior Quality Engineer",
    "gender": "Female",
    "id": 36 },

  {
    "name": "Elvina Hache",
    "position": "Statistician II",
    "gender": "Male",
    "id": 37 },

  {
    "name": "Vaughn McAlinden",
    "position": "Pharmacist",
    "gender": "Male",
    "id": 38 },

  {
    "name": "Merrel Bugdall",
    "position": "Database Administrator III",
    "gender": "Male",
    "id": 39 },

  {
    "name": "Mortie Bowry",
    "position": "Staff Scientist",
    "gender": "Male",
    "id": 40 },

  {
    "name": "Donal Blabey",
    "position": "Sales Representative",
    "gender": "Female",
    "id": 41 },

  {
    "name": "Taylor Tenney",
    "position": "Registered Nurse",
    "gender": "Male",
    "id": 42 },

  {
    "name": "Waring Krollmann",
    "position": "Legal Assistant",
    "gender": "Male",
    "id": 43 },

  {
    "name": "Peria Baltzar",
    "position": "Civil Engineer",
    "gender": "Male",
    "id": 44 },

  {
    "name": "Kristyn Dursley",
    "position": "Systems Administrator II",
    "gender": "Female",
    "office": "Quva",
    "id": 45 },

  {
    "name": "Orton Jaumet",
    "position": "Analog Circuit Design manager",
    "gender": "Male",
    "id": 46 },

  {
    "name": "Kristoforo Dorey",
    "position": "Executive Secretary",
    "gender": "Female",
    "id": 47 },

  {
    "name": "Ketty Holsey",
    "position": "Senior Sales Associate",
    "gender": "Male",
    "id": 48 },

  {
    "name": "Cornall Zanutti",
    "position": "Professor",
    "gender": "Female",
    "id": 49 },
  {
    "name": "Dael Jankin",
    "position": "Human Resources Manager",
    "gender": "Male",
    "id": 50 }];



  const [perPage, setPerPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = value => {
    setSize(value);
    const newPerPage = Math.ceil(datatableUsers.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-angle-double-left" }));
    }
    if (type === 'next') {
      return /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-angle-double-right" }));
    }
    return originalElement;
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h3", { className: "main-heading" }, 'Reviews'), /*#__PURE__*/  
    React.createElement("div", { className: "container-fluid mt-5 mb-5" }, /*#__PURE__*/
    React.createElement("div", { className: "row justify-content-center" }, /*#__PURE__*/
    React.createElement("div", { className: "col-md-10" }, /*#__PURE__*/
    React.createElement("div", { className: "card" }, /*#__PURE__*/
    React.createElement("div", { className: "card-body p-0" }, /*#__PURE__*/

    React.createElement("div", { className: "table-filter-info" }, /*#__PURE__*/

    React.createElement(Pagination, {
      className: "pagination-data",
      showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
      onChange: PaginationChange,
      total: datatableUsers.length,
      current: current,
      pageSize: size,
      showSizeChanger: false,
      itemRender: PrevNextArrow,
      onShowSizeChange: PerPageChange })), /*#__PURE__*/

    React.createElement("div", { className: "table-responsive" }, /*#__PURE__*/
    React.createElement("container", { className: " table-text-small mb-0" }, /*#__PURE__*/
    React.createElement("row", { className: "thead-primary table-sorting" }, /*#__PURE__*/
    ), /*#__PURE__*/


    React.createElement("div", {className:"m-5 p-5"},

    getData(current, size).map((data, index) => {
      return /*#__PURE__*/(
        React.createElement("h5",  { key: data.id }, /*#__PURE__*/
        React.createElement("h4", { className: "reviews-data" }, null), /*#__PURE__*/
        React.createElement("h3", null, data.name), /*#__PURE__*/
        React.createElement("h5", null, data.position),
        React.createElement("small", null, data.gender), /*#__PURE__*/));


    })))), /*#__PURE__*/




    React.createElement("div", { className: "table-filter-info" }, /*#__PURE__*/

    React.createElement(Pagination, {
      className: "pagination-data",
      showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
      onChange: PaginationChange,
      total: datatableUsers.length,
      current: current,
      pageSize: size,
      showSizeChanger: false,
      itemRender: PrevNextArrow,
      onShowSizeChange: PerPageChange })))))))));
};
