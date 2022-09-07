import { Component } from "react";
import ReactBurgerMenu from "./Components/ReactRouterMenu";

class App extends Component {
  render() {
    return (
      <>
        <ReactBurgerMenu
          buttons={[
            { label: "Example Buttons", to: "/" },
            {
              label: "Example Dropdown List",
              list: [
                { label: "Example Button", to: "/exp1" },
                { label: "Example Button", to: "/exp2" },
              ],
            },
          ]}
        />
      </>
    );
  }
}

export default App;
