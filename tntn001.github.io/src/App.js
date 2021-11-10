import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "./image/avatar.jpg";
import "./index.css";
import cake from "./image/cake-2.gif"
import gift1 from "./image/gift-1.gif"
import gift2 from "./image/gift-2.gif"
import gift3 from "./image/gift-3.gif"
import sfx from "./sound/cmsn.mp3"
import { colorBGTitle, colorTextInBlack } from "./colorDefine";
import Popup from "reactjs-popup";

import strs from "./stringDefine"
import { debuglog } from "util";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showLeft: true, menuOpen: false, popupGiftOpen:false };
    this.onWindowRezie = this.onWindowRezie.bind(this);    
    this.audio = new Audio(sfx);    
    this.audio.volume = 0.05;
    //this.audio.autoplay = true;
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
        {this.name()}     
        {this.congrate()}       
        {this.date()}  
        {this.birthdayCake()}      
        {this.giftOne()} 
        {this.giftTwo()}
        {this.giftThree()}
        {this.chooseGift()}
        {this.popupOpenGift()}
      </div>)

  }

  name() {
    return (<h3 style={textNameStyle}>{"Pé Tâm 17 tuổi ❤"}</h3>);
  }
  congrate() {
    return (<h3 style={textCongrateStyle}>{"Sinh Nhật Zui Zẻ"}</h3>);
  }
  date() {
    return (<h3 style={textDateStyle}>{"(11/11/2021)"}</h3>);
  }

  chooseGift() {
    return (<h3 style={textChooseGiftStyle}>{"Nhiều quà quá, chọn 1 cái đi nào!!!"}</h3>);
  }

  popupOpenGift()
  {
    return(
      <Popup modal trigger={this.state.popupGiftOpen}
        onClose={this.state.popupGiftOpen = false}>
        Hello
      </Popup>
    )
  }

  birthdayCake(){
    return(
          <img height={500}
          style={cakeStyle}
         src={cake} />
    )
  }
  giftOne()
  {
    return(
      <img height={200}
      style={gift1Style}
      src={gift1}
      onClick={()=>{
        this.state.popupGiftOpen = true
        debuglog("Click gift")
      }} />)
  }
  giftTwo()
  {
    return(
      <img height={200}
      style={gift2Style}
      src={gift2} 
      onClick={()=>{this.state.popupGiftOpen = true}}/>)
  }
  giftThree()
  {
    return(
      <img height={200}
      style={gift3Style}
      src={gift3} 
      onClick={()=>{this.state.popupGiftOpen = true}}/>)
  }

  buttonInfo() {
    return (<div onClick={() => {
       this.setState({ menuOpen: !this.state.menuOpen })
       this.audio.play() }}
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

const cakeStyle ={
  position: 'absolute', left: '45%', top: '60%',
  transform: 'translate(-50%, -50%)'
}
const gift1Style ={
  position: 'absolute', left: '6%', top: '50%',
  transform: 'translate(-50%, -50%)'
}
const gift2Style ={
  position: 'absolute', left: '10%', top: '60%',
  transform: 'translate(-50%, -50%)'
}
const gift3Style ={
  position: 'absolute', left: '18%', top: '50%',
  transform: 'translate(-50%, -50%)'
}

const textNameStyle = {
  color: '#506D84',
  fontSize:100,
  fontFamily: "font5",
  whiteSpace: "nowrap",
  position: 'absolute', left: '45%', top: '20%',
  transform: 'translate(-50%, -50%)'
}
const textCongrateStyle = {
  color: '#506D84',
  fontSize:80,
  fontFamily: "font5",
  whiteSpace: "nowrap",
  position: 'absolute', left: '45%', top: '8%',
  transform: 'translate(-50%, -50%)'
}

const textDateStyle = {
  color: '#506D84',
  fontSize:50,
  fontFamily: "font6",
  whiteSpace: "nowrap",
  position: 'absolute', left: '45%', top: '28%',
  transform: 'translate(-50%, -50%)'
}

const textChooseGiftStyle = {
  color: '#506D84',
  fontSize:40,
  fontFamily: "font6",
  whiteSpace: "nowrap",
  position: 'absolute', left: '12%', top: '32%',
  transform: 'translate(-50%, -50%)'
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
