import "./DropDownMenu.css";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const DropDownMenu = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div
      className={
        show
          ? "react-hamburger-dropdown-menu active"
          : "react-hamburger-dropdown-menu"
      }
    >
      <div
        className={
          show
            ? "react-hamburger-dropdown-menu-label active"
            : "react-hamburger-dropdown-menu-label"
        }
        onClick={handleShow}
      >
        {props.label}
      </div>

      <CSSTransition in={show} timeout={300} classNames="show" unmountOnExit>
        <div className="react-hamburger-dropdown-menu-list">
          {props.list.map((bt, index) => (
            <Button key={index} data={bt} showMenu={props.showMenu} />
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;