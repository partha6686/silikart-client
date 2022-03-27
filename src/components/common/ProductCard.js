import React from 'react'
import '../../Css/ProductCard.css'
const ProductCard = (props) => {
    const { title, description, price, productImg } = props.data;
  return (
    <div className='product_card'>
        <div className='product_card_head'>
            <div className='logo_img'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" alt="productImg" />

            </div>
        </div>
        <div className='product_card_body'>
        <div class="branding">
                    <h4><b>title</b></h4>
                    <span>19</span>
                    <p>description</p>
                </div>
                <div class="send_mail btn btn-outline-success">
                    <span>Mail To</span>
                </div>
                <div class="price btn btn-success">
                    <span>₹price</span>
                </div>
        </div>
    </div>
  )
}

export default ProductCard