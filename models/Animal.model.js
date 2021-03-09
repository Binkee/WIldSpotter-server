const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
 animal: {
   type: String,
   enum: ['moose', 'bear', 'bison', 'lynx', 'wolf']
 },
 userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "user"
 },
  location: Array,
  description: String,
  image: String
  
},
 {timestamps:true}
)




const AnimalModel = mongoose.model("animal", animalSchema);

module.exports = AnimalModel;