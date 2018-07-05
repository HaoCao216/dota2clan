// MyStoreCheckout.js
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import Abc from './CheckoutForm';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_6pRNASCoBOKtIshFeQd4XMUh'>
        <Elements>
          <Abc />
        </Elements>
      </StripeProvider>
    );
  }
}

export default MyStoreCheckout;