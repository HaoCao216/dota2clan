import React, { Component } from 'react'
import './App.css'
import MyStoreCheckout from './MyStoreCheckout';

class App extends Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')});
      });
    }
  }
  render () {
    return (
      <div className='App'>
        <MyStoreCheckout />
      </div>
    )
  }
}

export default (App)
