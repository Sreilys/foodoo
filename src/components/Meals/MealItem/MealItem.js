import React, {useContext} from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
  const PRICE = `$${props.price.toFixed(2)}`

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      description: props.description,
      price: props.price
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{PRICE}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem

