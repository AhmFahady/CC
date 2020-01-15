import React from "react";
import ReactDOM from "react-dom";
// import Content from "./components/course";
// import Book from "./components/Book";
import Countries from "./components/Countries";
// import Register from "./components/PhoneNumbers";
//import PhoneBook from "./components/PhoneNumbers";

const App = () => {
  return (
    <React.Fragment>
      {/* <Book /> */}
      <Countries />
      {/* <Register /> */}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
