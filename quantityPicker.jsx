import { useState } from "react";
import "./styles/quantityPicker.css";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);
 
    function increase() {
        const val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }
    function decrease() {
        if(quantity === 1) return;

        const val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
        
    }
    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-danger" onClick={decrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-success"onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;