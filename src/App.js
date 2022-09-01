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
    },
    buttons:
      [
        { label: "Example Buttons", to: "/" },
        {
          label: "Example Dropdown List",
          list: [
            { label: "Example Button", to: "/" },
            { label: "Example Button", to: "/" },
            {
              label: "Example DropDown List",
              list: [
                { label: "Example Button", to: "/" },
                { label: "Example Button", to: "/" },
                { label: "Example Button", to: "/" },
              ],
            },
            { label: "Example Button", to: "/" },
          ],
        },
        { label: "Example Buttons", to: "/" },
        { label: "Example Buttons", to: "/" },
      ] || this.props.buttons,
  };
  showMenu = () => {
    if (isMobile) {
      this.setState((prev) => ({
        settings: { ...prev.settings, display: !prev.settings.display },
      }));
    }
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
          <div className="react-hamburger-menu-list">
            {this.state.buttons.map((bt, index) => (
              <Button key={index} data={bt} showMenu={this.showMenu} />
            ))}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
