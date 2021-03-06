const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const LocationModel = require('../models/Location.model')

router.post('/tour', (req, res)=> {
  const {name, location, description,} = req.body;


LocationModel.create({name, location, description,})
      .then((location) => {
        // ensuring that we don't share the hash as well with the user
        res.status(200).json(location);
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({
            errorMessage: 'username or email entered already exists!',
            message: err,
          });
        } 
        else {
          res.status(500).json({
            errorMessage: 'Something went wrong! Oliver fucked Harry Potter!',
            message: err,
          });
        }
      })

    })

    module.exports = router;