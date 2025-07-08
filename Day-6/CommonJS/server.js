const express = require('express');
const {greetUser} = require('./greetings')

const app = express();
const port = 4000;
app.get('/', (req, res) => {  
    const name = req.query.name || 'Guest';
    const message = greetUser(name);  
    // this is a custome function it's return a greeting message and ye message browser m dikhata h
    res.send(message)  
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})