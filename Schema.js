const mongoose=require('mongoose');
const env=require('dotenv').config()

const DB=process.env.DB;
mongoose.connect(DB,{ useNewUrlParser: true ,useUnifiedTopology: true ,}).then(()=>{
    console.log("success");
}).catch((err)=>{
    console.log(err);         
});

const schema=new mongoose.Schema({
    title:{type:String},
    name:{type:String},
    mp3:{type:String},
    img:{type:String}
})

const data=mongoose.model('mp3music',schema);

module.exports=data;

