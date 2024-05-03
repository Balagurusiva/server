import express from 'express'
import mongoose from 'mongoose'
import Movie from './movie_schema.js'


const app = express()


app.get('/', async (req,res) => {
     const movie_data = await Movie.find({})
    res.json(movie_data)
})


app.listen(8080, () =>{
    mongoose.connect('mongodb+srv://balagurusiva2002:bala@cluster0.swmgcod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
})