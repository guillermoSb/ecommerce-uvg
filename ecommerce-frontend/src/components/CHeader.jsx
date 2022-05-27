import React, {useEffect} from "react";
import "../styles/CHeader.scss";
import logo from "../imgs/logo.png";
import { FaShoppingCart, FaStar } from "react-icons/fa";

/*import { Badge, Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';*/

import firebase from "../firebase";


export default function CHeader(props) {
    const [count, setCount] = React.useState(0);

    //Todo: Add user
    useEffect(() => {
        firebase.firestore().collection("carrito").doc("TkE5GqpRfsKZRawSMaBP").onSnapshot(snapshot => {
            setCount(snapshot.data().items.length);
        });
    }, []);

    if (count === 0) {
        setCount(undefined)
    }

    return (
      <header id="catalogo_header">
        <nav className="navver">
          <img id="catalogo_logo" src={logo} alt="" />
          <div id="spacer_div" />
          <ul className="nav_list">
            <a href="/Catalogo" style={{textDecoration: 'none', color: 'black'}}> <button type="button" id="nav_button"> Home </button> </a>
          </ul>
          <div className="__bar" />
          {/* <ul className="nav_list">
            <button type="button" id="nav_button"> Contact </button>
          </ul> */}

            <a href="/Carrito" className="btn btn-primary iconHeader" id="btn-cart-header"><FaShoppingCart/></a>
            <a href="/wishlist" className="btn btn-primary iconHeader" id="btn-star-header"><FaStar/></a>
        </nav>
      </header>
    );
}
