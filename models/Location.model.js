const mongoose = require("mongoose");


const locationSchema = new mongoose.Schema({
 name: String,
 description: String,
 location: String,
 userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "user"
  }
 
},
{timestamps:true}
);


const LocationModel = mongoose.model("location", locationSchema);

module.exports = LocationModel;
