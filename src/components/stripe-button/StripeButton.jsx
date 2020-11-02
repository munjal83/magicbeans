import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_516aJIMJ1RTD3f0rixJixaFXp7mHxZISjvxaAd0FQ0zEQ2eHO7h3YpdqjhL3FpGRotnMq3DeIDL0rfRkPyUyDqvU900SmiPshlN';

  const onToken = () => alert('Payment Successfull');
  return (
    <StripeCheckout
      label='Pay Now'
      name='MagicBeans Cafe Services'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
