import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products : [
                {
                          price: 999,
                          title: 'Car',
                          qty: 1,
                          img: '',
                          id : 1
                },
                {
                        price: 599,
                          title: 'watch',
                          qty: 1,
                          img: '',
                          id : 2
                },
                {
                            price: 688,
                          title: 'mobile phone',
                          qty: 1,
                          img: '',
                          id : 3
                }
            ]
            }
      
          
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
      }
    render(){
        const {products} = this.state;
        return (
                <div className="cart">
                    {
                        products.map((product)=>{
                            return <CartItem product={product} key={product.id}/>

                        })
                    }
                </div>
        );
    }
}


export default Cart;