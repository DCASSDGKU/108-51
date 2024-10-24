import React, { useState } from "react";
import QuantityPicker from "./quantityPicker";
import "./styles/product.css";

function Product(props){   
    const [quantity, setQuantity] = useState(1);

    function add(){
        console.log("adding to cart");
    }

    function handleQuantity(qty){
        console.log("quantity changed", qty);
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt=""></img>
            
            <h3>{props.data.title}</h3>

            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <div className="parent">
                <div className="product-price">
                    <label className="total">${getTotal()}</label>
                    <label className="price">${props.data.price.toFixed(2)}</label>
                </div>
            </div>
            <button className="btn btn-sm btn-success" onClick={add}>Add</button>           
        </div>
    );
}

export default Product;


