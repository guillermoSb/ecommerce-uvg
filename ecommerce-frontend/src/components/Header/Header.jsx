import React, {useEffect} from "react";
import { Badge, Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import firebase from "../../firebase";
import "../Carrito/Carrito.scss";


export default function Header() {
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
    <div>
        <AppBar position="static" className="header">
            <Toolbar className="header">
                <Typography variant="h2"
                    component="div" sx={{ flexGrow: 1 }}>
                </Typography>

                <IconButton>
                    <Badge badgeContent = {count} showZero color="secondary" >
                        <ShoppingCartIcon onClick={() => {console.log("open");}}
                        />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>


    );
}
