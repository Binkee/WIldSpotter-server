const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const LocationModel = require('../models/Location.model')
const AnimalModel = require('../models/Animal.model')
router.post('/tours', (req, res)=> {
  const {name, location, description,} = req.body;


LocationModel.create({name, location, description,})
      .then((tour) => {
        // ensuring that we don't share the hash as well with the user
        res.status(200).json(tour);
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
    router.get('/tours', (req, res) => {
      LocationModel.find()
       .then((response) => {
            res.status(200).json(response)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong',
                 message: err
            })
       }) 
    })
    router.get('/tourDetail/:tourId', (req, res) => {
      let tourId = req.params.tourId
      LocationModel.findById(tourId)
       .then((response) => {
          AnimalModel.find({tourId})
              .then((animals)=>{
                res.status(200).json({detail:response,animals})
              })
              .catch(()=>{

              })
         
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong',
                 message: err
            })
       }) 
    })
    
    router.delete('/tourDetail/:tourId', (req, res) => {
     LocationModel.findByIdAndDelete(req.params.tourId)
            .then((response) => {
                 res.status(200).json(response)
            })
            .catch((err) => {
                 res.status(500).json({
                      error: 'Something went wrong',
                      message: err
                 })
            })  
    })
    
    router.patch('/tourDetail/:tourId', (req, res) => {
      let tourId = req.params.tourId
      const {name, description } = req.body;
      LocationModel.findByIdAndUpdate(tourId, {$set: {name, description}}, {new: true})
            .then((response) => {
             
                 res.status(200).json(response)
            })
            .catch((err) => {
                 console.log(err)
                 res.status(500).json({
                      error: 'Something went wrong',
                      message: err
                 })
            }) 
          })
    router.get('/tour', (req, res) =>{
      LocationModel.find()
      .then((tour) => {
        // ensuring that we don't share the hash as well with the user
        res.status(200).json(tour);
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
            errorMessage: 'Something went wrong! Go to sleep!',
            message: err,
          });
        }
      })
    })
    
        module.exports = router;

    