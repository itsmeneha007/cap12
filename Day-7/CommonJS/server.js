const express = require ('express');
const {greetUser} = require('./greeting')

const app = express()
app.get('/', (req, res) => {
    const name = req.query.name || 'Guest';
    const message = greetUser(name)
    res.send(message)
})

app.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`)
})