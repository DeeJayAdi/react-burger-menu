import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    buttons: [
      { label: "HomePage", to: "/" },
      {
        label: "DropDownMenu",
        list: [
          { label: "HomePage", to: "/" },
          { label: "HomePage", to: "/" },
          { label: "HomePage", to: "/" },
          { label: "HomePage", to: "/" },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="react-hamburger-menu">
        <h1>REACT BURGER MENU</h1>
      </div>
    );
  }
}

export default App;
