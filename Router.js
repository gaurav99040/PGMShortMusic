const express = require('express')
const router = express.Router()
const data=require('./Schema')
router.use(express.json())

router.get('/getdata',async (req,res)=>{
    const show = await data.find();
    res.json(show);
})
router.post('/adddata', async (req, res) =>{
    const { title, name, mp3,img } = req.body;

const userfind = await data.findOne({ title });
if (userfind) {
    res.json({ error: 'user alredy register' });
}
const createuser = await data.create({
    title,
    name,
    mp3,
    img
})
const user = await createuser.save();
if (user) {
    res.status(200).json({ massage: 'register successfull' })
}
})

module.exports=router;