import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "./image/avatar.jpg";
import "./index.css";
import GroupName from "./component/groupName"
import LeftLayout from "./component/leftLayout"
import CenterLayout from "./component/centerLayout"
import ScrollUpButton from "react-scroll-up-button"
import { slide as Menu } from 'react-burger-menu'
import { colorBGTitle, colorTextInBlack } from "./colorDefine";




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showLeft: true, menuOpen: false };
    this.onWindowRezie = this.onWindowRezie.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowRezie)
  }

  componentDidMount() {

    window.addEventListener("resize", this.onWindowRezie, false)
    this.onWindowRezie();
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }




  render() {
    return (
      <div>
        <Menu
          disableAutoFocus
          styles={stylesSide}
          customBurgerIcon={false}
          customCrossIcon={false}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          width={350}  >
          {LeftLayout()}

        </Menu>
        {GroupName()}
        {!this.state.showLeft ? this.buttonInfo() : ""}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          {this.state.showLeft ? LeftLayout() : ""}
          {CenterLayout()}
        </div>
        <ScrollUpButton
          ShowAtPosition={400} />

      </div>)

  }
  buttonInfo() {
    return (<div onClick={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
      style={{
        marginTop: 10,
        padding: 10,
        background: colorBGTitle,
        color: colorTextInBlack,
        width: 60,
        borderBottomRightRadius: 55,
        borderTopRightRadius: 55,
        cursor: "pointer"
      }}>Info</div>);
  }


  onWindowRezie() {
    var current = [window.outerWidth, window.outerHeight];
    if (current[0] < 800 && this.state.showLeft) {
      this.setState({ showLeft: false });
    } else if (current[0] > 800 && !this.state.showLeft) {
      this.setState({ showLeft: true });
    }
  }
}



export default App;

var stylesSide = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
