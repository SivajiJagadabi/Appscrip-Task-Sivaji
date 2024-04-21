import { useState } from 'react';
import './index.css'
import {CiHeart} from "react-icons/ci";


const ProductCard=(props)=>{
    const {productDetails}=props
    const {image,title}=productDetails

    const [favourite,setFavourite]=useState(false)

    const onFavorite=()=>{
        setFavourite(prevState=>!prevState)
    }


    return(
        <div className='product-card'>
            <img src={image} alt='product' className='product-img'/>
            <div className='title-favourite'>
            <p className='product-title'>{title}</p>
          {favourite?<CiHeart style={{fontSize:'25px',color:'red'}} onClick={onFavorite}/>:<CiHeart style={{fontSize:'25px'}} onClick={onFavorite}/>}  
            </div>
        </div>
    )
}

export default ProductCard