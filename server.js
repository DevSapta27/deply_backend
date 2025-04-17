require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT ;

app.use(express.json());

app.get("/", (req,res) => {
  return res.json({
    success : true ,
    message : "welcome to the Home Page"
  })
})

app.get( "/getPosts" , (req,res) => {
  return res.json({
    success : true ,
    message : "You can get All Your Posts Here"
  })
})

app.post( "/addPosts",  (req,res) => {
  return res.json( {
    success : true ,
    message : "You can add new Posts Here. But Update from Postman Only"
  })
})

app.delete("/deletePosts" , (req,res) => {
  return res.json({
    success : true ,
    message : " You can delete Posts from here . But Delete from Postman Only"
  })
})

app.put("/updatePosts" , (req,res) => {
  return res.json( {
    success : true ,
    message : "You can update all your posts from here "
  })
})

app.listen( port , () => {
  console.log(` Server is running on ${port}`)
})