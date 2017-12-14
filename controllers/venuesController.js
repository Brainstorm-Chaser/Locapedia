const db = require("../models"); 
//console.log(db.User);
//console.log("123");
//const mongoose = require("mongoose");

// Defining methods for the venuesController
module.exports = {
  findAll: function(req, res) {
    console.log("uservenues")
    console.log(req.body);
    db.User.find({googleId:req.body.googleId})      
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel[0].saveitems)})
     // .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    //console.log(JSON.stringify(db.User));
   // console.log("456");
    db.User.findOne({googleId:"111466030326545450170"})
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)      
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("controller")
    console.log(req.body.saveitems);
    //db.User.findOneAndUpdate({ _id: "5a21c4c871868f1f9cd90959"}, {saveitems:req.body.saveitems})
    db.User.findOneAndUpdate({googleId:"111466030326545450170"}, {$addToSet : {saveitems:req.body.saveitems}}, {new : true})

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.update({ _id: req.body.id },{$pull:{saveitems:req.body.saveitems}}, {new: true})
      // .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
