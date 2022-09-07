import "./HamburgerIcon.css";

const HamburgerIcon = (props) => (
  <div
    className={
      props.active
        ? "react-hamburger-menu-icon active"
        : "react-hamburger-menu-icon"
    }
    onClick={() => props.onClick()}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HamburgerIcon;
