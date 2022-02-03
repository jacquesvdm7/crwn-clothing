import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>  {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51KP0jDJVh2BGBwY6kK4STmJDlk2SfEvOdr1HjKFjoQZsLGtciU4A1sdljOKsH80lhA8lYf8q7R6qrmKo9GPN3lyM00D6u312ht';

    const onToken = token => {
        console.log(token);
        alert('Payment Succssfull');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;