[Nosey Robinhood](https://imgur.com/HvfdHoS)

# Nosey Robinhood

Nosey RobinHood is a clone of the popular stock market web app RobinHood. Here's a live version: https://nosey-robinhood.herokuapp.com/#/

### Technologies

 * Express.js
 * Node.js
 * Mongoose.js
 * MongoDB
 * React
 * Redux
 * Passport.js 
 * CSS
 * HTML
 * JavaScript
 
### Features

 * Constructed User Auth by sending encrypted user data via Axios HTTP request with JSON Webtoken library to be decrypted at the frontend with JWT-Decode library
 * Integrated IEX (Third Party) API by sending an HTTP query with a secured API key for real-time U.S. stock market data
 * Created User Portfolio Dashboard that updates off of our Redux stores state
 * User Watchlist - Users can add companies to a watchlist so that they can track specific companies that interest them
 * Company Profile - Users can see detailed information about an individual company, including detailed financial information and stats. Users can also buy, sell, and watch stocks from this page
 * Buying/Selling Shares - Users are able to purchase and sell company shares. Their balance and portoflio both update in real time alongside their trading decisions 
 * Search - Users can get instant live search results of company symbols as they are typing the company name or symbol 
 * Employed Docker container tooling to ensure code is shipped reliably across all platforms

### Overview

Nosey RobinHood is a stock market trading web application which gives users the ability to follow companies on the stock market. Users can view, watch, purchase and sell shares of companies. Users start with a $30,000 paper money balance so that they can safely develop their trading skills before moving onto a real-money stock market app.

### Screenshots

![Splash Page](https://i.imgur.com/FnFu8Ns.png)
![Sign In](https://i.imgur.com/RDMV51w.jpg)
![Sign Up](https://i.imgur.com/wWy3T4Y.png)
![Search](https://i.imgur.com/14Eg36T.png)

### Code Snippets

![handleSale()](https://i.imgur.com/qNCySDd.png)
![container](https://i.imgur.com/BNxnrbY.png)

### Group Members

Jasim Atiyeh, Albert Cheng, Zach Williams