import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading : true
    }
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
// mount kerte hai yaha app ko
  componentDidMount(){
    //abhi yaha per data store hai firestore me to
//     firebase
//     .firestore()
//     .collection('collection')
//     //get()will give you snapshot
//     .get()
//     //then is func 
//     .then((snapshot)=>{
//       console.log(snapshot);
// // docs.data we use bcz hame data jo collection me hai vo chahiye
//       snapshot.docs.map((docs)=>{
//         console.log(docs.data());
//       })
// // displaying all data which is present
//         const products = snapshot.docs.map((doc)=>{
//           const data = doc.data();
//           data['id'] = doc.id;
//           return data;
//         })
//         // pahele state use hua ab set state use karenge kyuki data rerender hua
//         this.setState({
//           products,
//           loading : false
//         })
//     })

   this.db
    .collection('collection')
    //get()will give you snapshot
    .onSnapshot((snapshot) => {
      console.log(snapshot)

      snapshot.docs.map((docs)=>{
                console.log(docs.data());
              })
        // displaying all data which is present
                const products = snapshot.docs.map((doc)=>{
                  const data = doc.data();
                  data['id'] = doc.id;
                  return data;
                })

                this.setState({
                            products,
                            loading : false
                          })
    })
    //then is func 
  
  
  }
//increase kerne ko sab quantity
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    //taking index of that product
    const index = products.indexOf(product);
    //abhi product us index per gaya aur quantity increament by 1 
    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('collection').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty + 1
    })
    .then(() =>{
      console.log("updated successfully");
    })
    .catch((err)=>{
      console.log('error in updating' , err);
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    const docRef = this.db.collection('collection').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty - 1
    })
    .then(() =>{
      console.log("updated successfully");
    })
    .catch((err)=>{
      console.log('error in updating' , err);
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('collection').doc(id);
    docRef
    .delete()
    .then(() =>{
      console.log("Deleted successfully");
    })
    .catch((err)=>{
      console.log('error in updating' , err);
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  addProduct = () => {
   this.db
    .collection('collection')
    .add({
      price : 123,
      title : "washing machine",
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5kT-czuJZnBe1AHByJ9EPnMvlECWmQJjSUP0gk7JuxJbgjPd-Du3vf15Ci8wqVlHEOOx0FKCs&usqp=CAc',
      qty : 12
    })
    //ye na sab document ho jayega to document ko console per display karenge
    .then((docRef) => {
      console.log('product is added' , docRef);
    }).catch((err) => {
      console.log('error is ' , err)
    })
  }
  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding : 20 , fontSize: 20}}>  Add a product </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
      </div>
    );
  }
}

export default App;
