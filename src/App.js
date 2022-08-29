import { Component } from "react";
import { isMobile } from "react-device-detect";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Button from "./Components/Button/Button";
import HamburgerIcon from "./Components/HamburgerIcon/HamburgerIcon";

class App extends Component {
  state = {
    settings: {
      display: false,
      anotheroption: false,
    },
    buttons:
      [
        { label: "HomePage", to: "/" },
        {
          label: "DropDownMenu",
          list: [
            {
              label: "2nd Drop down",
              list: [
                { label: "SubPage", to: "/" },
                { label: "SubPage", to: "/" },
                { label: "SubPage", to: "/" },
                { label: "SubPage", to: "/" },
              ],
            },
            { label: "HomePage", to: "/" },
            { label: "HomePage", to: "/" },
            { label: "HomePage", to: "/" },
          ],
        },
      ] || this.props.buttons,
  };
  showMenu = () => {
    this.setState((prev) => ({
      settings: { ...prev.settings, display: !prev.settings.display },
    }));
  };
  componentDidMount() {
    if (!isMobile) {
      this.setState((prev) => ({
        settings: { ...prev.settings, display: true },
      }));
    }
  }
  render() {
    const { display } = this.state.settings;

    return (
      <div className="react-hamburger-menu">
        <HamburgerIcon onClick={this.showMenu} active={display} />
        <CSSTransition
          in={display}
          timeout={300}
          classNames="show"
          unmountOnExit
        >
          <>
            {this.state.buttons.map((bt, index) => (
              <Button key={index} data={bt} showMenu={this.showMenu} />
            ))}
          </>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
