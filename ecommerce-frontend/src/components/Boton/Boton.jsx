
import React from "react";
import './Boton.scss'
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import firebase from "../../firebase";

import ProductContainer from "../ProductContainer/ProductContainer";

export default function Boton({arr,id}) {

    var porcentaje = 20;

    const getTotal = (arreglo) => {
        let total = 0;
        for (let i = 0; i < arreglo.length; i++) {
            total += arreglo[i].cantidad*arreglo[i].precio;
        }
        return (Math.round(total * 100) /100).toString();
    }

    var props = {
  outputType: OutputType.Save,
  returnJsPDFDocObject: true,
  fileName: "Invoice",
  orientationLandscape: false,
  compress: true,
  logo: {
      src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
      width: 53.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
      }
  },
  business: {
      name: "AMAX",
      address: "Guatemala, Guatemala",
      phone: "(+502) 1792-0404",
      email: "amaxsales@company.com",
      email_1: "amxsales@company.al",
      website: "www.amax.com",
  },
  contact: {
      label: "Invoice issued for:",
      name: "Client Name",
      address: "Albania, Tirane, Astir",
      phone: "(+355) 069 22 22 222",
      email: "client@website.al",
      otherInfo: "www.website.al",
  },
  invoice: {
      label: "Invoice #: ",
      num: 19,
      invDate: "Payment Date: " + new Date().toLocaleDateString(),
      invGenDate: "Invoice Date: " + new Date().toLocaleDateString(),
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: "#",
          style: {
            width: 10
          }
        },
        {
          title: "Title",
          style: {
            width: 30
          }
        },
        {
          title: "Description",
          style: {
            width: 80
          }
        },
        { title: "Price"},
        { title: "Quantity"},
        { title: "Unit"},
        { title: "Total"}

       /* [objeto 1[index, title, costo, cantidad, "unidades", total]]*/
      ],
      table: Array.from(arr,(item,index)=>([
        index + 1,
        item.nombre,
        item.nombre,
        item.precio,
        item.cantidad,
        item.itemcode,
        (item.cantidad*item.precio)]
    )),
      invTotalLabel: "Total:",
      invTotal: getTotal(arr).toString(),
      invCurrency: "ALL",
      row1: {
          col1: 'VAT:',
          col2: porcentaje.toString(),
          col3: '%',
          style: {
              fontSize: 10 //optional, default 12
          }
      },
      row2: {
          col1: 'SubTotal:',
          col2:  (getTotal(arr)/(1+porcentaje/100)).toString(),
          col3: 'ALL',
          style: {
              fontSize: 10 //optional, default 12
          }
      },
      invDescLabel: "Invoice Note",
      invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
  },
  footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
  },
  pageEnable: true,
  pageLabel: "Page ",
};

    const saveToDatabase = (db,item, fecha) => {
        db.collection('compras').add({
            cantidad: item.cantidad,
            fecha: fecha,
            id: item.itemcode,
            usercode: id
        })
    }

    const deleteFromCarrito = (db,id) => {
        db.collection('carrito').doc(id).delete().then(r => {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    const removeFromInventario = (db,item, cantidad) => {
        db.collection('inventario').doc(item.itemcode).update({
            cantidad: firebase.firestore.FieldValue.increment(-cantidad),
            cant_ventas: firebase.firestore.FieldValue.increment(cantidad)
        })
    }

    const databasethings = async () => {
        const db = firebase.firestore()
        const fecha = new Date();
        await arr.map((item) => (
            saveToDatabase(db,item, fecha)
        ))
        await deleteFromCarrito(db,id);
        await removeFromInventario(db,arr[0], arr[0].cantidad);
        return true;
    }

    async function handleClick() {

        await databasethings()

        await new Promise(resolve => setTimeout(resolve, 400));
        console.log(jsPDFInvoiceTemplate(props))
        console.log("Se está imprimiendo")
        let hola;
        hola = Array.from(arr,(item,index)=>([
            index + 1,
            item.nombre,
            item.nombre,
            item.precio,
            item.cantidad,
            item.itemcode,
            (item.cantidad*item.precio)]
        ))

        console.log(getTotal(arr))

    }



  return (
   <>
    <button type = "button" className = "button_pdf" onClick={handleClick} >Descargar pdf</button>

   </>
  );
}
