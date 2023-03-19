import { useDispatch, useSelector } from 'react-redux';
import { ExpenseActions } from '../ReduxStore/ExpenseReducer';
import Card from '../UI/Card';

import classes from './Products.module.css';
import classes1 from './ProductItem.module.css';
import { useEffect } from 'react';

const Products = (props) => {
  const dispatch=useDispatch()
  const items=useSelector((state)=>state.expensesReducer.items)
  const getFromBackend=useSelector((state)=>state.expensesReducer.getData)
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
let url='https://shoppingcart-edcc9-default-rtdb.firebaseio.com';

const getData=async()=>{
  try {
    const response=await fetch(`${url}/items.json`)
    const data=await response.json()
    const arr=[];
    for(let key in data){
      arr.push({id:key, ...data[key]})
    }
    console.log(arr);
     dispatch(ExpenseActions.addToCart(arr))
  } catch(error) {
    console.log(error)
  }
}

  const postData=async(obj)=>{
    try{
      const response=await fetch(`${url}/items.json`,{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
        }
      })
      getData()
    }
    catch(err){
      alert(err);
    }
  }

  const putData=async(id,obj)=>{
    try {
      const response=await fetch(`${url}/items/${id}.json`,{
        method:'PUT',
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
        }
      })
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  const addHandler=(title,price,description)=>{
    
    const isExist=items.find((item)=>item.title===title)
    if(isExist){
      const obj={
      
        title:title,
        price:price,
        description:description,
        quantity:isExist.quantity+1,
        totalPrice:price
      }
      putData(isExist.id,obj)
    }else{
      const obj={
      
        title:title,
        price:price,
        description:description,
        quantity:1,
        totalPrice:price
      }
      postData(obj)
    }
    
   
  }

  useEffect(()=>{
    getData()
  },[getFromBackend])

  
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
              <button onClick={addHandler.bind(null, item.title, item.price,item.description)}>Add to Cart</button>
            </div>
          </Card>
        </li>
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
