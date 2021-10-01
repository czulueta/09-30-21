const mongoose =require("mongoose") 
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String
    }
})
module.exports = mongoose.Schema("Movie", movieSchema)

// import mongoose from 'mongoose';
//   const { Schema } = mongoose;

//   const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });