const express = require('express');
const router = express.Router();
const PurchaseRecord = require('../../models/Purchase_Record');
const AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
const yourApiKey = 'N8I5YKNOKROBHLSK';
const alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

router.get('/companies/:company_ticker', (req, res) => (
  alphaVantageAPI.getIntradayData(req.ticker, req.interval)
    .then(intradayData => res.json(intradayData))
    .catch(err => res.json(err));
));