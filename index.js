const express = require('express');
const app = express();
const cors=require('cors');
const env=require('dotenv');
const path=require('path');

const port=process.env.PORT||5000;

app.use(express.json());
app.use(cors())


app.use(require('./Router'))

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join('frontend/build')));
    app.get('*',(req,res)=>{
res.sendFile(path.resolve('frontend','build','index.html'))
    })
}
app.listen(port, () => console.log(`Example app listening on port port!`))