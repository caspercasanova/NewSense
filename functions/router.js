const functions = require('firebase-functions');
const router = require("express").Router()

// stripe 
const stripe = require('stripe')(functions.config().stripe.secret_key) 



let productsFromStripeList;

const calculateOrderAmount = productList => {

  let pricesObj = {}
  pricesObj.orderTotal = 0
    
  let calculatePrice = (itemID, quantity = 0) => {
    let unitPrice;
    for(let product of productsFromStripeList){
      if(product.id === itemID){
        unitPrice = product.price.unit_amount
        break
      }
    }
    let total = quantity * unitPrice
    pricesObj.orderTotal += total
    return [unitPrice, total]  
  }

  


  //! i feel like this is not very smart
  for(let item in productList){
    let [unitPrice, unitTotal] = calculatePrice(item, productList[item])
    pricesObj[item] = {unitPrice, unitTotal}
  } 

pricesObj.currency= 'usd'
return pricesObj
}


router.route('/calculatePrice')
      .post((req, res) => {
        let products = req.body
        let pricesObj = calculateOrderAmount(products)
        console.log(pricesObj)
        res.send(pricesObj)
      })




//Create a customer
const create_Customer_With_Stripe = () => stripe.customers.create()

//Retrieve Products
const retrieve_ALL_Products_From_Stripe = () => stripe.products.list({limit: 20}) 
const retrieve_SINGLE_Product_From_Stripe = (productID = "prod_HSG4rqyRcdgO2w") => stripe.products.retrieve(productID)

//Retrieve Product Price
const retrieve_ALL_Prices_From_Stripe = () => stripe.prices.list()
const retrieve_SINGLE_Price_From_Stripe = (productID) => stripe.prices.retrieve(productID)


/* NSA META DATAS */
const retrieve_NSA_Balance = () => stripe.balance.retrieve()
const retrieve_NSA_Transactions = (optionsObj) => stripe.balanceTransactions.retrieve(optionsObj)


/* 




*/


router.route('/get_stripe_api_key')
      .get((req, res) => {
        let data = functions.config().stripe.publishable_key
        res.send(data)
      })


router.route('/all_products_and_prices')
      .get(async (req, res) => {
        try{
          let products = await retrieve_ALL_Products_From_Stripe()
          
          
          let prices = await retrieve_ALL_Prices_From_Stripe()
    
          // ! merge prices obj and product obj
          for(let priceObj of prices.data){
            for(let priceList of priceObj.product){
              for(let product of products.data){
                product.price = {...priceObj}
              }
            }
          }

          // ! set products object
          productsFromStripeList = products.data

          console.log('I Merged')
          res.send(products)




        }catch(error){
          res.send(error)
        }
      })








router.route('/create-payment-intent')
      .post( async (req, res) => {
        const body = req.body;
        //create payment intent with order amount and currency
        //need customer, billing, card deets
        let options = {
          amount: 1099,
          currency: 'usd',
          customer: '', //id of customer 
          payment_method_types: ['card'],
          statement_descriptor: 'Custom descriptor',
          metadata: {
            order_id: '6735',
          },
        }

        try{
          const paymentIntent = await stripe.paymentIntents.create(options)
          res.send(paymentIntent)
        } catch(error){
          res.send(error)
        }

      })



router.route('./get_NSA_Balance')
      .get(async(req, res) => {

        try{
          const balance = await retrieve_NSA_Balance()
          res.send(balance)
        } catch(error){
          res.send(error)
        }
      })
router.route('./get_NSA_Transactions')
      .get(async (req, res) => {
        /* Can Include More Options */
        let options = {
          limit: 10
        }
        
        try{
          const transactions = await retrieve_NSA_Transactions(options)
          res.send(transactions)
        } catch(error){
          res.send(error)
        }
      })

module.exports = router