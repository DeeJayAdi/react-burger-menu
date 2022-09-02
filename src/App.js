import { Component } from "react";
import { isMobile } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
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
            { label: "Example Button", to: "/exp1" },
            { label: "Example Button", to: "/exp2" },
            {
              label: "Example DropDown List",
              list: [
                { label: "Example Button", to: "/exp3" },
                { label: "Example Button", to: "/exp4" },
                { label: "Example Button", to: "/exp5" },
              ],
            },
            { label: "Example Button", to: "/exp6" },
          ],
        },
        { label: "Example Buttons", to: "/exp7" },
        { label: "Example Buttons", to: "/exp8" },
      ] || this.props.buttons,
  };
  showMenu = () => {
    if (isMobile || window.innerWidth < 900) {
      this.setState((prev) => ({
        settings: { ...prev.settings, display: !prev.settings.display },
      }));
    }
  };
  handleResize = (e) => {
    if (window.innerWidth > 900) {
      this.setState((prev) => ({
        settings: { ...prev.settings, display: true },
      }));
    }
  };
  componentDidMount() {
    if (!isMobile) {
      this.setState((prev) => ({
        settings: { ...prev.settings, display: true },
      }));
    }
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const { display } = this.state.settings;

    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
