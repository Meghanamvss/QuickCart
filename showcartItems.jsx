import React from 'react'
import { useSelector } from 'react-redux';
import { removecart } from './createSlice';
import { useDispatch } from 'react-redux';
function Showcart() {

let cartItems = useSelector((state) => state.store.cartItems);

let totalPrice = cartItems.reduce((total, item) => total+item.price,0);

let gst = (totalPrice * 18) / 100;

let paidAmount = totalPrice + gst;

let dispatch = useDispatch();



function handleRemove(item) {
  dispatch(removecart(item));
  alert("Item removed from cart");
}

  return (
    <div className='container my-2'>
  <h2 className='text-start text-primary'>Your Shipping Items</h2>

<div className='row'>

<div className='col-lg-10'>
 <div className='row'>

<div className='col-lg-10'>

 <div className='row'>
  {
 cartItems.map((item) => {
    return (
      <div className='col-md-3' key={item.id}>
        <div className='card my-2 shadow'>
          <img src={item.image} alt={item.title} className='card-img-top'  style={{height:"200px"}}/>
          <div className='card-body'>
            <h5 className='card-title'>{item.title.slice(0,20)}</h5>
            <p className='card-text'>Price: ${item.price}</p>
            <p className='card-text'>Quantity: &#8377;{item.rating.count}</p>

            <button className='btn btn-danger' onClick={()=>handleRemove(item)}>Remove</button>
          </div>
        </div>
      </div> 
    )
  } )
}

 </div>
    
 </div>




<div className='col-lg-2'>
 <h6>Price Details</h6>
 <hr></hr>
 <dt>Total Price</dt>
 <dd>&#8377;{totalPrice}</dd>

  <dt>Gst </dt>
 <dd>&#8377;{gst}</dd>

   <dt>Paid Amount </dt>
 <dd>&#8377;{Math.round(paidAmount,4)}</dd>


</div>



</div>



</div>

</div>
</div>
  )
}

export default Showcart
