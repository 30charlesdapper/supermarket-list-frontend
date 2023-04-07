/* import {updateItem} from "../../services/request"
import { useState } from "react";
import "./index.css"

export const ListCard = ({item, onClick, onCheckItem}) => {
   
    
    //const [checked, setChecked] = useState(false);

    return (
        <div className="list-card-container" >
            <div className="checkbox">
                <input
                    onChange={() => onCheckItem(item)}
                    checked={item.checked}
                    id="checkbox"
                    type="checkbox"
                />
                <label htmlFor="checkbox" />
            </div>
            <div className="list-card-text-container">
                 <span className="list-cart-title">{item?.name}</span>
                 <span className="list-cart-subtitle">{item?.quantity} unidades</span>
            </div>
           <div className="arrow-icon-container" onClick={() => onClick(item)} >
           <img 
                src="/images/arrow.svg" 
                alt="arro-icon" 
                className="arrow-icon"
            />
           </div>
         </div>
    )
} */


import './index.css'

export const ListCard = (props) => {
  const { item } = props

  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <span>{item.name}</span>
    </div>
  )
}
