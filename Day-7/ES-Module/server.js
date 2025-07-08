import express from 'express';
import {add} from './math.js';
import multiply from './math.js';


const app = express();

app.get('/', (req, res) => {
    const result = add(3, 4);
    const product = multiply(4, 5)

    res.send(`Add:${result}, Multiply:${product}`)
})

app.listen(3000, () =>{
    console.log(`Server is running on http://localhost:3000`)
})