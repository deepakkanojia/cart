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
      handleIncreaseQuantity = (product) => {
        console.log('hey please increase the quantity', product);
        const {products} = this.state;

        const index = products.indexOf(product);
        
        products[index].qty += 1 ;
        
        this.setState({
            products : products
        })
      }

      handleDecreaseQuantity = (product) => {
        console.log('hey please increase the quantity', product);
        const {products} = this.state;

        const index = products.indexOf(product);

        if(product.qty == 0)
        {
            return ;
        }
        
        products[index].qty -= 1 ;
        
        this.setState({
            products : products
        })
      }
    render(){
        const {products} = this.state;
        return (
                <div className="cart">
                    {
                        products.map((product)=>{
                            return <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            />

                        })
                    }
                </div>
        );
    }
}


export default Cart;