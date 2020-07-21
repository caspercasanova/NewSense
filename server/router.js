/* eslint-disable camelcase */
const router = require('express').Router();
// STRIPE KEY
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//! THIS IS NOT A GOOD WAY OF SAVING ONTO THE STRIPE PRODUCTS
//! It Will Not Be Saved. I Should Not Rely on Stripe for
//! the product List
let productsFromStripeList;
//! ^^^^^^^^^^^^^^^^^^^^^^^
const calculateOrderAmount = (productList) => {
  const pricesObj = {};
  pricesObj.orderTotal = 0;

  const calculatePrice = (itemID, quantity = 0) => {
    const thingWeAreLookingFor = productsFromStripeList.find((product) => product.id === itemID);
    const unitPrice = thingWeAreLookingFor.price.unit_amount;

    const total = quantity * unitPrice;
    pricesObj.orderTotal += total;
    return [unitPrice, total];
  };

  // Create a pricesObj with all relevent data
  // for front end fullfillment
  // must create a copy
  //! i feel like this is not very smart
  for (const item in productList) {
    const [unitPrice, unitTotal] = calculatePrice(item, productList[item]);
    pricesObj[item] = { unitPrice, unitTotal };
  };

  pricesObj.currency = 'usd';
  return pricesObj;
};

// Retrieve Products
const retrieve_ALL_Products_From_Stripe = () => stripe.products.list({ limit: 20 });
const retrieve_SINGLE_Product_From_Stripe = (productID = 'prod_HSG4rqyRcdgO2w') => stripe.products.retrieve(productID);

// Retrieve Product Price
const retrieve_ALL_Prices_From_Stripe = () => stripe.prices.list();
const retrieve_SINGLE_Price_From_Stripe = (productID) => stripe.prices.retrieve(productID);

// NSA META DATAS
const retrieve_NSA_Balance = () => stripe.balance.retrieve();
const retrieve_NSA_Transactions = (optionsObj) => stripe.balanceTransactions.retrieve(optionsObj);

// Create Customer
const create_Customer_With_Stripe = () => stripe.customers.create();
/* --------------------------------- ROUTES --------------------------------- */

router.route('/calculatePrice')
  .post((req, res) => {
    const products = req.body;
    const pricesObj = calculateOrderAmount(products);
    console.log(pricesObj);
    res.send(pricesObj);
});

router.route('/get_stripe_api_key')
  .get((req, res) => {
    const data = process.env.STRIPE_PUBLISHABLE_KEY;
    res.send(data);
  });

router.route('/all_products_and_prices')
  .get(async (req, res) => {
    try {
      const products = await retrieve_ALL_Products_From_Stripe();
      const prices = await retrieve_ALL_Prices_From_Stripe();

      //! set products object
      productsFromStripeList = products.data;

      //! Stripes keeps the prices and products objects seperate.
      //! The solution would be to have a custom data solution.
      //! In the mean time, this for of loop mess iterates through the prices.data
      //! then iterates through the price list within the....
      //! IDK WTF I DID HERE HAHAHAHA 
      //! We Are Attempting to merge the Proper Price Obj
      //! from Prices with the Corroralting Product based on the Prices Obj
      //! Ill rework this to use for each loops because the linter is freaking out
      //! But the solution is to store all products within the database and associate prices
      //! Converting will unlock the potential for dynamic pricing as we can update
      //! the price within the database much easier than interfacing with an api
      //! NOTE TO SELF
      //! THIS DOESNT EVEN WORK
      //! THE PRICES FOR EACH PRODUCT ARE INCORRECT
      for (const priceObj of prices.data) {
        for (let priceList of priceObj.product) {
          for (const product of products.data) {
            product.price = { ...priceObj };
          }
        }
      }



      console.log('I Merged');
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  });

router.route('/create-payment-intent')
  .post(async (req, res) => {
    // const { body } = req;
    // create payment intent with order amount and currency
    // need customer, billing, card deets
    const options = {
      amount: 1099,
      currency: 'usd',
      customer: '', // id of customer
      payment_method_types: ['card'],
      statement_descriptor: 'Custom descriptor',
      metadata: {
        order_id: '6735',
      },
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create(options);
      res.send(paymentIntent);
    } catch (error) {
      res.send(error);
    }
  });

//! This has not been Utilized created yet
router.route('./get_NSA_Balance')
  .get(async (req, res) => {
    try {
      const balance = await retrieve_NSA_Balance();
      res.send(balance);
    } catch (error) {
      res.send(error);
    }
  });

//! This has not been Utilized created yet
router.route('./get_NSA_Transactions')
  .get(async (req, res) => {
    /* Can Include More Options */
    const options = {
      limit: 10,
    };

    try {
      const transactions = await retrieve_NSA_Transactions(options);
      res.send(transactions);
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;