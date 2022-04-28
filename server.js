const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const UserRouter = require('./routes/userRoutes');





dotenv.config()


// connecting to the database
mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },()=>{
 console.log(`is connected to the database`) 
    
})



// middleware

app.use(express.json());
app.use('/api',UserRouter)

const port = process.env.PORT || 5000;









app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})