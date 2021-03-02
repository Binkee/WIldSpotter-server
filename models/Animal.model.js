const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
 animal: {
   type: String,
   enum: ['Moose', 'Bear', 'Bison', 'Lynx', 'Wolf']
 },
 userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "user"
 },
  location: String,
  description: String,
  image: String
})




const AnimalModel = mongoose.model("animal", animalSchema);

module.exports = AnimalModel;