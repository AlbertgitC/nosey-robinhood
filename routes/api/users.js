const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, email: user.email };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This email does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
          funds: user.funds
        };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ 
    id: req.user.id,
    email: req.user.email
  });
});

router.post('/purchase',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOneAndUpdate(
      { _id: req.user.id },
      { $inc: { funds: -(req.body.totalPrice) } })
      .then(response => res.json({
        response
      }))
      .catch(err => res.status(404).json({
        nofundsfound: "No funds found for this user"
      }));
  });

router.post('/sale',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOneAndUpdate(
      { _id: req.user.id },
      { $inc: { funds: req.body.totalSale } })
      .then(response => res.json({
        response
      }))
      .catch(err => res.status(404).json({
        nofundsfound: "No funds found for this user"
      }));
  });
  
router.get('/user', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    User.find({ _id: req.user.id })
      .then(user => res.json(user))
  }
);

router.patch('/add_watch_list',
  (req, res) => {
    
    User.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { watch_list: req.body.tag } },
      { new: true }
    ).then(user => res.json(user.watch_list));
  }
);

router.patch('/remove_watch_list',
  (req, res) => {
    
    User.findOneAndUpdate(
      { _id: req.body.id },
      { $pull: { watch_list: req.body.tag } },
      { new: true }
    ).then(user => res.json(user.watch_list));
  }
);

module.exports = router;