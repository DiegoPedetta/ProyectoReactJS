import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

export const ItemDetailContainer = () => {
  const [productDetail,setProductDetail] = useState({ });
  const {productid} = useParams();
  useEffect(()=> {

     

    const getProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productid}`);
            const data = await response.json();
            setProductDetail(data);
        } catch (error){
            console.log(error);
        }
    };
    getProducts();
  },[productid]);

  console.log(productDetail);

  return <ItemDetail product={productDetail}/>
}

export default ItemDetailContainer;