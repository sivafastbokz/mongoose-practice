const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./user')
const port = 5000;


app.use(express.json());

mongoose.connect('mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/mongoose_app?retryWrites=true&w=majority',
{
    useNewUrlParser: true
}
);

app.post('/userdata',async(req,res)=>{
    const{userName,userAge,userEmail,hobbies,address}=req.body;
    const userDetails = new users({
        userName,
        userAge,
        userEmail,
        hobbies,
        address
    });
 try {
     await userDetails.save();
     res.status(200).json({message:'userdata successfully inserted'})
 } catch (error) {
    res.status(500).json({error:'internal server error'})
 }
})


app.get('/getalluserlist',async(req,res)=>{
    try {
        const getUsers = await users.find()
        res.json(getUsers)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})

app.get('/getuserlist',async(req,res)=>{
    try {
        const getUsers = await users.find().where('userName').equals('tony').where('userAge').lte(26).select('hobbies')
        res.json(getUsers)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})


app.get('/getalluserlist/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const getUsers = await users.findById(id)
        res.json(getUsers)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})

app.delete('/deleteuserdata/:id',async(req,res)=>{
    try {
        const id = req.params.id
        await users.findByIdAndDelete(id)
        res.json({message:'userdata deleted successfully'})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})

app.get('/getuserlist/:userName',async(req,res)=>{
    try {
        const userName = req.params.userName
        const getUserByName = await users.findOne({userName})
        res.json(getUserByName)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})



app.delete('/deleteuserlist/:userName',async(req,res)=>{
    try {
        const userName = req.params.userName
        const deleteUserByName = await users.findOneAndDelete({userName})
        res.json(deleteUserByName)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})

// app.put('/findoneandupdate/:id',async(req,res)=>{
//     try {
//         const userName = req.params.userName
//         let query = {_id:id}
//         const updateUserByName = await users.findOneAndUpdate({userName})
//         res.json(updateUserByName)
//     } catch (error) {
//         res.status(500).json({error:'internal server error'})
//     }
// })


app.put('/updateuserlist',async(req,res)=>{
    try {
        // const userName = req.params.userName
        const updateUserByName = await users.updateOne({userName:'tony'},{$set:{userName:'tony stark'}}).where('userAge').equals(26)
        res.json(updateUserByName)
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})


app.put('/updateuser/:id',async(req,res)=>{
    const {userName,userAge,userEmail,hobbies,address} = req.body
    const id = req.params.id
    try {
    const updatedUser = await users.findByIdAndUpdate(id,{
        userName,
        userAge,
        userEmail,
        hobbies,
        address
    })
    res.json(updatedUser);
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
})

// app.put('/replace/:id',async(req,res)=>{
//     const {userName,userAge,userEmail,hobbies,address} = req.body
//     const id = req.params.id
//     try {
//     const updatedUser = await users.replaceOne(id,{
//         userName,
//         userAge,
//         userEmail,
//         hobbies,
//         address
//     })
//     res.json(updatedUser);
//     } catch (error) {
//         res.status(500).json({error:'internal server error'})
//     }
// })


app.listen(port,()=>{
    console.log(`server started on port ${port}`)
});