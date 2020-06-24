const router = require("express").Router()
// stripe 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)



const calculateOrderAmount = productList => {
  //repalce this constance witha calculation fo the orders amount
  //calculate the order total on the srver to prevent people from
  //directly manipulating on the client
  let totalPayment = 0
  productList.forEach((product) =>{})

  return 1500
}





//Create a customer
const create_Customer_With_Stripe = () => stripe.customers.create()

//Retrieve Products
const retrieve_ALL_Products_From_Stripe = () => stripe.products.list({limit: 10}) 
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
        let data = process.env.STRIPE_PUBLISHABLE_KEY
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

          console.log('I Merged')
          res.send(products)




        }catch(error){
          res.send(error)
        }
      })

router.route('/get_product/:id')
      .get(async (req, res) => {
        try{
          let data = await retrieve_SINGLE_Product_From_Stripe(`${req.params.id}`)
          console.log(data)
          res.send(data)
        }catch(error){
          res.send(error)
        }
      })


router.route('/all_prices')
      .get(async (req, res) => {
        try{
          let data = await retrieve_ALL_Prices_From_Stripe()
          res.send(data)
        } catch(error){
          res.send(error)
        }
      })

router.route('/get_product_price/:id')
      .get(async (req, res) => {
        let {id} = req.params.id
        console.log(req.params.id, id, 'i recieved get products prices')
        try{
          let data = await retrieve_SINGLE_Price_From_Stripe(id)
          console.log(data)
          res.send(data)
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