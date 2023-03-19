import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions } from '../ReduxStore/ExpenseReducer';
import Card from '../UI/Card';
import classes from './Cart.module.css';

import classes1 from './CartItem.module.css';

const Cart = (props) => {
  const dispatch=useDispatch()
  const arrayOfItems=useSelector((state)=>state.expensesReducer.items)

  
  let url='https://shoppingcart-edcc9-default-rtdb.firebaseio.com';
  const putData=async(id, obj)=>{
    try {
      const response=await fetch(`${url}/items/${id}.json`, {
        method:'PUT',
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
        }
      })
      dispatch(ExpenseActions.loadDataHandler())
      
    } catch (error) {
      console.log((error));
    }
  }

  const deleteData=async(id)=>{
    try {
      const response=await fetch(`${url}/items/${id}.json`, {
        method:'DELETE',
      })
    } catch (error) {
      console.log(error);
    }
  }

  const addHandler=(id,title,price,description, quantity, totalPrice)=>{
    
    const obj={
      
      title:title,
      price:price,
      description:description,
      quantity:quantity+1,
      totalPrice:totalPrice+price
    }
    // dispatch(ExpenseActions.addToCart(obj))//not used when calling from backend
    putData(id,obj)
  }

  

  const removeItemHandler=(id, title,price,description,quantity,totalPrice)=>{
    const deletedItem=arrayOfItems.find((item)=>item.id===id)
    
    if(deletedItem.quantity>1){
      const obj={
        title:title,
        price:price,
        description:description,
        quantity:quantity-1,
        totalPrice:totalPrice-price
      }
      putData(id,obj)
    }
    else{
      deleteData(id)
    }
    dispatch(ExpenseActions.loadDataHandler()) //to call getRequest from backend
    // dispatch(ExpenseActions.removeItem(id))
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
                <button onClick={removeItemHandler.bind(null,items.id,items.title, items.price,items.description,items.quantity, items.totalPrice)}>-</button>
                <button onClick={addHandler.bind(null,items.id,items.title, items.price,items.description,items.quantity, items.totalPrice)}>+</button>
              </div>
            </div>
          </li>)
        })}
       
      </ul>
    </Card>
  );
};

export default Cart;
