import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartAction } from '../ReduxStore/CartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  
  const dispatch=useDispatch()

  const showHandler=()=>{
   dispatch(CartAction.VisibilityChange())
  }
  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
