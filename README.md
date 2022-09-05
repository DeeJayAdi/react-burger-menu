# React Burger Menu

React burger menu created for mobile and desktop browsers

# Example

```js
class App extends Component {
  state = {
    buttons: [
      { label: "Button label", to: "Path to redirect" },
      {
        label: "DropDown Menu Label",
        list: [
          { label: "Button label", to: "Path to redirect" },
          { label: "Button label", to: "Path to redirect" },
        ],
      },
    ],
  };
  render() {
    return (
      <BroswerRouter>
        <ReactBurgerMenu buttons={this.state.buttons} />
        ...
      </BroswerRouter>
    );
  }
}
```

## Change the color of the menu

```css
:root {
  --react-hamburger-menu-background-color: color;
  --react-hamburger-menu-background-color2: color;
  --react-hamburger-menu-font-color: color;
}
```
