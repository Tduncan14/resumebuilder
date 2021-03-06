const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const path = require('path');

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
app.use(cors())
app.use(express.json());

// this the routes
app.use('/api',UserRouter)


// production code

if(process.env.NODE_ENV === 'production'){

    app.use('/', express.static('client/build'));

    app.get('*',(req,res) => {

        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })

}

const port = process.env.PORT || 8000;









app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})