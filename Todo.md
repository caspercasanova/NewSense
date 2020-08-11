
### New Sense Active Development
--- 
-- Going To Restart This
### Resources
      -https://www.sanity.io/docs/overview-introduction
            -This website has some concepts I knew would be cool features
            -Including a systems check
      -https://openbase.io/
            -Mad Charts and cool style
      - https://www.geckoboard.com/blog/saas-metrics-vcs-share-key-metrics-track/
      - https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
      - https://dev.to/shiftyp/react-hooks-snippet-shopping-cart-12lb
      - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
      - https://usehooks.com/useHover/
      - http://www.simon-li.com/design-and-code/how-to-set-perfect-line-lengths-for-your-webpages/
      - https://codepen.io/meduzen/pen/zxbwRV
      - https://css-tricks.com/old-timey-terminal-styling/
      - https://css-tricks.com/accessible-svgs/
      - https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a
      - https://medium.com/@rossbulat/react-svg-stroke-animation-with-css-explained-c1e8e3d2e206react 
      - https://ishadeed.com/article/custom-underline-svg/
      - https://mastery.games/post/dynamic-svg-components/
      - https://thenounproject.com/search/?q=sparkle
      - https://joshwcomeau.com/react/announcing-use-sound-react-hook/ 
      - Overreacted blog by dan Abramov
      - Robin Wieruch
      - Amellia wattenberger blog
      - https://www.robinwieruch.de/firebase-test
 
---
> ## **TODOS** 
--- 
      - React Router Refactor
---
      - React Spring Conversion
---
      - Styled Components Refactor
---
      -Tray Component Conditionally Render Backgrounds 
            - Picture Filters 
---
      - Slide right the entire body for a new product?
---
      - Landing Page/Login Page
        - Count Down Until Next Product
---
      - Hashing Function Animation
        - Blockchain esk

---
      - Account/Auth
        - Account Page
        - Account Deletion
        - Account Creation
---
      -Input Field Sanitation
---
      - About Page https://www.geckoboard.com/blog/saas-metrics-vcs-share-key-metrics-track/
        - Total Accounts
        - Total Sales
        - Total Impressions (twitter/instagram)
        - Saas Metrics
          - Net Monthly Recurring Revenue (MRR) Growth Rate
            - Goal is a Sustainable Ratio of 3.5 - 4x
            - Display Calculations
          - Net MRR Churn Rate
            -  Measure of lost Revenue month over month due to cancellations/downgrades
          - Gross MRR Churn Rate 
          - Expansion MRR Rate 
            - Additional recurring revenue generated from existing ustomers through addons upsells and cross-sells 
          - Average Revenue Per Account
            - usually calculated on a monthly basis
          - Lead Velocity Rate
            - The Growth percentage of qualify leads month over month
          - CAC Payback Period 
            - Number of months it takes to earn back the money invested in aquiring customers
---
      - Payment With Stripe
            - Complete Payment Intent
            - Data solution?
            - Front Load an upsell
      
---
      -D3 Integation https://recharts.org/en-US/
        - SAAS Metrics 
        - Firebase  Product Metrics 
        - Map visualizer
         - leaflet + d3??
--- 
      - Account Page
        - Display Reward Points
        - Display Discount
        - Customer Tier

---
      - 1k Goal Bar
        - percentages 
        - exponential tickmarks
--- 
      - Ticker
        - Automated Discounts? instagrams
        - Memorial Day
        - Christmas
--- 
      - Generate a report/ download free Stencil
        - Button when clicked brings up a Calculator
        - Can Print A report
--- 
      -Widgits
            - Connection Status
--- 
      -SVGs
            - Money Sign
            - Logo


## 6/19/2020: First Log In A Long Time. 
      -Made lots of leaps and am begining to find/discover a design aesthetic. House Music and Half-Life are the main influences on NSA design approach as of currently. Things that have been created are as follows:
            -Tray component that hold children and has animated hover edges. Fairly dynamic but am not completely satified
            -Animted Text Component that utilizes React-Spring to make a typewriter effect. Pretty Neat and more research into React-Spring is necessary
            -A useInterval hook that is extremely useful for clean intervals in react. Happy I found it. 
            -Stripes API, though deep and unique, is beginning to resonate with my capacity to utilize it. My mental model differs from Stripes API and perhaps paypal would be different but Stripes Docs is simply incredible and its actually a joy using it.
            -Components that I have always wondered how to create are now for me easy to create like landing pages and stock tickers and carousels. 
            -Sci-Fi design is cool and almost a study of its own. 
            -Components like a Coming Soon Modal extremely important and more things like them need to be discovered and iterated upon. 
## 6/19/2020: Things To Ponder
      - (Business Model/Product Is Insufficient)
        - Selling a digital product seems to fall more in line with stripes API as they really promote Developers to utilize the subscription model. I don't know of a product that could utilize such a method, yet....
      - Designing Components Raw Components For Re-Use Is Not A Waste Of Time
      - Efficiency of design is really important and a stylesheet can very easily become out of control fairly quickly. A system will need to be discovered. SASS is awesome, but may not be the best
      - Another component similiar to a Tray needs to be found. A Container/Tray of some sort 

---
## 6/19/2020: Formatting Code and Searching For Utility In Code 
      -Formating File Structure. Might Create a Services folder that includes a Format, ErrorTracking and Currency Formatting. https://www.robinwieruch.de/react-folder-structure suggest creating a domain formating for react files which i might agree with



## 6/30/2020: Stripe integration is pretty much done integrated. Things i needede to do include 
      - A shopping cart component that posts to the server everytime the shopping cart updates
      - Things I will be transitioning towards. 
        - Styled Components
          - Going to be worth it in the long run
            - Transitions to react native 
            - Better Error Handling Solutions
            - More Customability
          - Better synergies with other packages like react spring 
        - React Router
        - Firebase/firestore
        - Sanitation of Input Fields

## 7/6/2020: Firebase/Firestore/Auth
      Alright so conversion to styled components is less of a hastle than I thought, although I am essentially updating as I go. No need in converting everything at once. Since last I checked in I essenitally usercreation/authentication but I need to store the user inside the firestore database as well. I also want to track the users points or something so I can essentially make a simple reward system. Make it look like cheat codes, At a certail level you unlock a tier and with it comes discounts or something. I have also deployed the site, but my understanding of deploying to the cloud with a server was very wrong. As of now I am currently updating Google cloud functions to essentially function as a server. This application will not be serverless, which for prototypal stages should function fine. The integration of google is far more of a tech creep than I thought, in that, integration really requires a lot of integration with the platform, it speeds up prototype creation, but transitioning from Prototype to production is interesting as you will have to upgrade to a serverless approach. 

      I have a week's timer on the deployed site that says what the next weeks upgrades could look like. Until that time I want to get this server back up and running so I can display the art. It is also a new design feature that actually looks pretty cool on the landing page. In a way it tells the public that new things are to come and it shows a self realization in the applications flaws. Definetly a good spot to explore. Perhaps Add an aspect that shows the website is functioning normally as well. 

      Things I want to explore is more of a console design aesthetic. Perhaps splitting the screen in half where the right side is presentational/interactional and left side is navigational. Could be pretty sick, however conversion to small screens will be a little weird. Perhaps a sidebar navigation that disappears for phones or something. 

      I was also able to add graphs which to me is a little bit of a personal achievement I am happy about, placeholder data for the moment but that will change. 

      The thing I am really looking forward towards is adding sound effects. I should probably frontload sounds and then go to Collin Danaher to help me craft some unique ones. 

      "Frontloading", a concept, practice and art. Frontloading leads you to places you wouldn't have found. Essentially the result of frontloading technology/features is that you fall upon new perspectives more often. Sound could prove to be an integral aspect to the app. 

## 7/8/2020: Applying to Jobs While Developing
      Shit sucks hahahaha plus still cant figure out this fucking Firebase Shit. W/e I like having my developement split betwen crafting Backend things and front end design features. I am probably lucky to be able to be doing both. 

      Can't wait to add sounds this weekend. 

## 7/9/2020: Possible Ways Of Testing Launch?
      - I should think about how this app will be launched. I need random people testing it. Like interview cake but for programs
## 7/16/2020: Coming back after a couple days away.
      - Applying to jobs===rejections. But its cool. Things I need to integrate as developement continues. 
            - Testing with jest. 
                  -Connecting to the database
                  -Stripe interactions
            - Error Handling on the front end. Mainly form actions. 
            - Stripe Webhook and storage of orders within firestore
            - More methods on data/analytics
                  - User accounts / Adjusting
                    - Rewards Status 
                    - Purchase history
            - Sounds
            - New Method of handling ToDos