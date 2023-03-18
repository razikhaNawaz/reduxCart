import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions } from '../ReduxStore/ExpenseReducer';
import Card from '../UI/Card';
import classes from './Cart.module.css';

import classes1 from './CartItem.module.css';

const Cart = (props) => {
  const dispatch=useDispatch()
  const arrayOfItems=useSelector((state)=>state.expensesReducer.items)

  const addHandler=(id,title,price,description)=>{
    const obj={
      id:id,
      title:title,
      price:price,
      description:description,
      quantity:1,
      totalPrice:price
    }
    dispatch(ExpenseActions.addToCart(obj))
  }

  const removeItemHandler=(id)=>{
    dispatch(ExpenseActions.removeItem(id))
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {arrayOfItems.map((items)=>{
           return (<li className={classes1.item}>
            <header>
              <h3>{items.title}</h3>
              <div className={classes1.price}>
                {items.totalPrice}
                <span className={classes1.itemprice}>(${items.price.toFixed(2)}/item)</span>
              </div>
            </header>
            <div className={classes1.details}>
              <div className={classes1.quantity}>
                x <span>{items.quantity}</span>
              </div>
              <div className={classes1.actions}>
                <button onClick={removeItemHandler.bind(null,items.id)}>-</button>
                <button onClick={addHandler.bind(null,items.id,items.title, items.price,items.description)}>+</button>
              </div>
            </div>
          </li>)
        })}
       
      </ul>
    </Card>
  );
};

export default Cart;
