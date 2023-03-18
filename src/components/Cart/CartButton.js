import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../ReduxStore/CartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
   const arrayOfItems=useSelector((state)=>state.expensesReducer.items)
  
  const dispatch=useDispatch()

  const showHandler=()=>{
   dispatch(CartAction.VisibilityChange())
  }

  let count=0;
  arrayOfItems.forEach((item)=>{
    count++
  })
  // console.log(arrayOfItems);
  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
