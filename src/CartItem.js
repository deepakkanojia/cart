import React from 'react';
import App from './App';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }
    increaseQty=()=>{
        console.log('test', this.state);
        //set state form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // });
        //if prev state require
        this.setState((prevState)=>{
            return{
                qty : prevState.qty + 1
            }

        })
    }
    decreaseQty=()=>{
        console.log('this', this.state);
        if(this.state.qty == 0)
        return;
        this.setState({
            qty : this.state.qty - 1
        });
    }
    // deleteQty=()=>{
    //     if(t)
    // }
    render(){
        const {price ,qty , title} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img alt="increase" 
                        className="action-icon" 
                        src="https://as2.ftcdn.net/jpg/02/31/96/13/500_F_231961389_VeMu1IMFHWeFiYPfaK6bmT4O8XwxfQC1.jpg" 
                        height="50" 
                        onClick = {this.increaseQty}></img>
                        <img alt="decrease" 
                        className="action-icon" 
                        src="https://as2.ftcdn.net/jpg/03/22/51/47/500_F_322514738_MLOhywnD3IgcuataRptf50qq3eR5N5vZ.jpg" 
                        height="50" onClick = {this.decreaseQty}></img>
                        <img alt="delete" 
                        className="action-icon" 
                        src="https://image.flaticon.com/icons/svg/443/443124.svg" 
                        height="50" ></img>
                    </div>
                </div>
            </div>
        );
    }
} 

const style = {
    image:{
        height : 110 ,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}
export default CartItem;