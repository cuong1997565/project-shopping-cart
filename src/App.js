import React, { Component } from 'react';
import Header from './components/header';
import ProductContainer from './containers/ProductContainer';
import Message from './components/message';
import Cart from './components/Cart';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div>
       <Header />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <Message />
                <Cart />      
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
