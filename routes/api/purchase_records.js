const express = require('express');
const router = express.Router();
const passport = require('passport');
const PurchaseRecord = require('../../models/Purchase_Record');
const { check, validationResult } = require('express-validator');
const merge = require('lodash/merge');

router.get('/user_holdings',
  passport.authenticate('jwt', { session: false }),
  (req, res) => (
    PurchaseRecord.find({ user_id: req.user.id })
      .then( response => {
        if (response.length === 0) {
          return res.json({});
        }
        let holdings = {};
        response.map(
          record => {
            if (holdings.hasOwnProperty(record.company_ticker)) {
              holdings[record.company_ticker].push(record);
            } else {
              holdings[record.company_ticker] = [record]
            }
          }
        );
        return res.json(holdings);
      })
));

router.get('/company/:company_ticker',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    PurchaseRecord.find({
      user_id: req.user.id,
      company_ticker: req.params.company_ticker
    })
      .then(response => {
        if (response.length === 0) {
          return res.json({});
        } else {
          return res.json({
            [req.params.company_ticker]: response
          });
        }
      })
      .catch(err => res.status(404).json({
        noholdingsfound: "No holdings found for this company"
      }))
});

router.post('/company/:company_ticker/purchase',
  passport.authenticate('jwt', { session: false }),
  [check('shares').isNumeric()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const newHolding = new PurchaseRecord({
      user_id: req.user.id,
      company_ticker: req.params.company_ticker,
      shares: req.body.shares,
      purchase_price: req.body.purchase_price
    });
    newHolding.save().then(response => res.json({
      [response.company_ticker]: [response]
    }));
  }
);

router.patch('/sale',
  passport.authenticate('jwt', { session: false }),
  [check('shares').isNumeric()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    PurchaseRecord.findOneAndUpdate(
      { _id: req.body.purchaseId },
      { $inc: { shares: -(req.body.shares) } })
        .then(response => {
          res.json({
              [response.company_ticker]: [response]
            });
          });
  }

);

module.exports = router;

// localhost:5000/api/purchase_records/company/payc/purchase
// [response.data.company_ticker]: response.data