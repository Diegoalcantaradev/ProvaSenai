const express = require('express');
const app = express();
const cors = require('cors')

const routes = require('./routes/routes')
app.use(routes)
app.use(cors())
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})