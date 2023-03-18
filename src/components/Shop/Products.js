import { useDispatch } from 'react-redux';
import { ExpenseActions } from '../ReduxStore/ExpenseReducer';
import Card from '../UI/Card';

import classes from './Products.module.css';
import classes1 from './ProductItem.module.css';

const Products = (props) => {
  const dispatch=useDispatch()
  const arrayOfData=[{
    id:'a1',
    title:'title1',
    price: 11,
    description:'description1'
  },
  {
    id:'a2',
    title:'title2',
    price: 12,
    description:'desciption2'
  },
  {
    id:'a3',
    title:'title3',
    price: 13,
    description:'desciption3'
  }]

  const addHandler=(id,title,price,description)=>{
    const obj={
      id:id,
      title:title,
      price:price,
      description:description,
      quantity:1,
      totalPrice:price
    }
    console.log(id,'id');
    dispatch(ExpenseActions.addToCart(obj))
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {arrayOfData.map((item)=>(
          <li className={classes1.item}>
          <Card>
            <header>
              <h3>{item.title}</h3>
              <div className={classes1.price}>${item.price.toFixed(2)}</div>
            </header>
            <p>{item.description}</p>
            <div className={classes1.actions}>
              <button onClick={addHandler.bind(null,item.id, item.title, item.price,item.description)}>Add to Cart</button>
            </div>
          </Card>
        </li>
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
