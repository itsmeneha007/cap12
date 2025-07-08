import express from 'express';    
import {add} from './math.js';     
import multiply from './math.js'    

const app = express();    
app.get('/', (req, res) => {  
  const result = add(2, 3)
  const product = multiply(2, 3);
  res.send(`Add: ${result}, Multiply: ${product}`)

})

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})


