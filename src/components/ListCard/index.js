import { useState } from "react";
import "./index.css"

export const ListCard = ({item}) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="list-card-container">
            <div className="checkbox">
                <input
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    id="checkbox"
                    type="checkbox"
                />
                <label htmlFor="checkbox" />
            </div>
            <div className="list-card-text-container">
                 <span className="list-cart-title">{item?.name}</span>
                 <span className="list-cart-subtitle">{item?.quantity} unidades</span>
            </div>
            <img src="/images/arrow.svg" alt="arro-icon" className="arrow-icon"/>
         </div>
    )
}