import React,{useEffect} from 'react'
import "./ListS.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ListS({item}) {
  const navigate = useNavigate();
    useEffect(()=>{
        console.log(item)
    },[])
  return (
    <div className='container-lists'>
        <img src={`${item.url}`} height="180px" />
        <h4>{item.name}</h4>
        <h4>{item.price} Rs.</h4>
        <Button variant="primary" onClick={()=>{navigate("/viewProduct")}}>View Product</Button>
        <Button variant="primary">Add to cart</Button>
    </div>
  )
}

export default ListS