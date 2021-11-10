import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "./image/avatar.jpg";
import "./index.css";
import cake from "./image/cake-2.gif"
import gift1 from "./image/gift-1.gif"
import gift2 from "./image/gift-2.gif"
import gift3 from "./image/gift-3.gif"
import giftOpen from "./image/gift-open.gif"
import sfx from "./sound/cmsn.mp3"
import { colorBGTitle, colorTextInBlack } from "./colorDefine";
import Popup from "reactjs-popup";

import strs from "./stringDefine"
import { debuglog } from "util";
import { initializeApp } from "firebase/app";
import {getDatabase, ref,set, child,get, update} from"firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUDiUCemNaHX9XEYClli401gb98w0mwVk",
  authDomain: "snbt-1111.firebaseapp.com",
  databaseURL: "https://snbt-1111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snbt-1111",
  storageBucket: "snbt-1111.appspot.com",
  messagingSenderId: "568454598924",
  appId: "1:568454598924:web:70751893714db054403929",
  measurementId: "G-7EGH9921SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showLeft: true, menuOpen: false, isOpenGift:false, wish:"" };
    this.onWindowRezie = this.onWindowRezie.bind(this);    
    this.audio = new Audio(sfx);    
    this.audio.volume = 0.05;
    this.listGift=[
      "Hehe nhận một Voucher ăn lẩu",
      "Hehe nhận một Voucher ăn đồ nướng",
      "Hehe nhận một Voucher ăn sushi",
      "Hehe nhận một Voucher craft beer",
      "Hehe nhận một Voucher cocktail bar",
    ]    
    this.rnd =Math.floor(Math.random() *5)    
    this.textGift =this.listGift[this.rnd];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClickWish = this.handleOnClickWish.bind(this);  
    this.handleOnOpenPopup = this.handleOnOpenPopup.bind(this);  
  }
  handleChange(event) {
    this.setState({wish: event.target.value});
  }

  handleSubmit(event) {
    console.log("wish " + this.state.wish);
    //event.preventDefault();
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

  handleOnClickWish() {    
    this.audio.play();
    
    let newDate = new Date()
    let key = newDate.toString("ss/mm/hh/dd/MM/yy");
    let obj = {
      "key":this.state.wish
    }
    update(ref(dataBase,"wish/"+key),obj);
  }

  handleOnOpenPopup()
  {
    this.audio.play();
    let newDate = new Date()
    let key = newDate.toString("ss/mm/hh/dd/MM/yy");
    let obj = {
      "key":this.textGift
    }
    update(ref(dataBase,"gift/"+key),obj);
  }




  render() {
    return (
      <div >         
        {this.name()}     
        {this.congrate()}       
        {this.date()}  
        {this.birthdayCake()}      
        {this.giftOne()} 
        {this.giftTwo()}
        {this.giftThree()}        
        {this.popupOpenGift()}
        {this.formTreaty()}
        {this.buttonWish()}
      </div>)

  }

  name() {
    return (<h3 style={textNameStyle}>{"Pé Tâm 17 Tuổi ❤"}</h3>);
  }
  congrate() {
    return (<h3 style={textCongrateStyle}>{"Sinh Nhật Zui Zẻ Nhe"}</h3>);
  }
  date() {
    return (<h3 style={textDateStyle}>{"(11/11/2021)"}</h3>);
  }

  chooseGift() {
    return (<h3 style={textChooseGiftStyle}>{"Nhiều quà quá, mở quà đi nè!!!"}</h3>);
  }

  popupOpenGift()
  {
    return(

      <Popup modal onOpen={this.handleOnOpenPopup} trigger={!this.state.isOpenGift?<button style={textChooseGiftStyle}>Nhận quà nè!!!</button>:""}>     
      <div style={{height:"400px"}}>
         <img height={200}
      style={giftOpenStyle}
      src={giftOpen} 
      />
      <h3 style={textOpenGiftStyle}>{this.textGift}</h3>
      </div>
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
      src={gift1}/>)
  }
  giftTwo()
  {
    return(
      <img height={200}
      style={gift2Style}
      src={gift2} />)
  }
  giftThree()
  {
    return(
      <img height={200}
      style={gift3Style}
      src={gift3} />)
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

  formTreaty()
  {
    return(<form style={formStyle}>
      <label>
    <input size="60" type="text" name="name" placeholder="Ước điều gì cho sinh nhật nè" onChange={this.handleChange} />
      </label>  
    </form>)
  }

  buttonWish()
  {
    return(<button style={buttonWishStyle} onClick={this.handleOnClickWish}>
      Gửi cho ông bụt
    </button>)
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
const formStyle={
  position: 'absolute', right: '0%', top: '60%',
  transform: 'translate(-10%, -50%)',    
}
const buttonWishStyle={
  position: 'absolute', right: '10%', top: '65%',
  transform: 'translate(-20%, -50%)',  
}



const popupStyle={
  background: "rgba(25, 25, 25, 0.8)"  ,  
  width:window.outerWidth,
  height:window.outerHeight
}

const textOpenGiftStyle = {
  color: '#fff',
  fontSize:100,
  fontFamily: "font6",
  whiteSpace: "nowrap",
  position: 'absolute', left: '50%', top: '60%',
  transform: 'translate(-50%, -50%)',  
}



const textChooseGiftStyle = {
  color: '#506D84',
  fontSize:40,
  fontFamily: "font6",
  whiteSpace: "nowrap",
  position: 'absolute', left: '12%', top: '32%',
  transform: 'translate(-50%, -50%)',
  background:"#96C7C1"
}
const giftOpenStyle ={
  position: 'absolute', left: '45%', top: '40%',
  transform: 'translate(-50%, -50%)'
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
