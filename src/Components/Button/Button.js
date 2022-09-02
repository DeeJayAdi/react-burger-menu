import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./Button.css";

const Button = (props) => {
  const { label, to, list } = props.data;

  if (list) {
    return <DropDownMenu label={label} list={list} showMenu={props.showMenu} />;
  }

  return (
    <Link
      to={to}
      className="react-hamburger-menu-button"
      onClick={() => props.showMenu()}
    >
      {label}
    </Link>
  );
};

export default Button;
