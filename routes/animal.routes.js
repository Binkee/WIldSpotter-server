const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const AnimalModel = require('../models/Animal.model')

router.post('/add', (req, res)=> {
  const {animal, location, description, image} = req.body;


AnimalModel.create({animal, location, description, image})
      .then((animal) => {
        // ensuring that we don't share the hash as well with the user
        res.status(200).json(animal);
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

router.get('/animalDetail/:animalId', (req, res) => {
  AnimalModel.findById(req.params.animalId)
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

router.delete('/animalDetail/:animalId', (req, res) => {
 AnimalModel.findByIdAndDelete(req.params.animalId)
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

router.patch('/animalDetail/:animalId', (req, res) => {
  let animalId = req.params.animalId
  const {animal, description, } = req.body;
  AnimalModel.findByIdAndUpdate(animalId, {$set: {animal, description,}}, {new: true})
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
router.get('/animals', (req, res) =>{
  AnimalModel.find()
  .then((animal) => {
    // ensuring that we don't share the hash as well with the user
    res.status(200).json(animal);
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