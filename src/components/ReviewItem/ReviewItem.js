import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
           <div>
           <h3 className="product-name">name : {name} </h3>
            <h4>price : {price} </h4>
            <h4>quantity : {quantity} </h4>
            <button onClick={() => handleRemove(key)} className="btn-regular">remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;