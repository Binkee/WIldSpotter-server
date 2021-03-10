const mongoose = require("mongoose");
require("../models/User.model")
require("../models/Location.model")
const animalSchema = new mongoose.Schema({
 animal: {
   type: String,
   enum: ['moose', 'bear', 'bison', 'lynx', 'wolf']
 },
 userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "user"
 },

 tourId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "location"
},
  location: Array,
  description: String,
  image: String
  
},
 {timestamps:true}
)




const AnimalModel = mongoose.model("animal", animalSchema);

module.exports = AnimalModel;