const mongoose = require('mongoose');
const users = require('./user')

mongoose.connect('mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/mongoose_app?retryWrites=true&w=majority',
{
    useNewUrlParser: true
}
).then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('connection to database failed')
})

//  async function createDatabase(){
//     try {
//         const userDetails = await users.create({
//             userName:'tony',
//             userAge:22,
//             userEmail:'tony123@gmail.com',
//             hobbies:['inventing new things'],
//             address:{
//                 street:'north across st',
//                 city:'san francisco'
//             },
//     })
//         await userDetails.save()
//     } catch (error) {
//         console.log(error.message)
//     }
//  }
// createDatabase();

// async function findUserAndUpdate(){
//     try {
//         const update = await users.findByIdAndUpdate("64c763b405678d0e6f5a219d",{$set:{userName:'tonystark'}})
//         console.log(update)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// findUserAndUpdate();

// async function findAllUsers(){
//     try {
//         const findUsers = await users.find();
//         console.log(findUsers)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// findAllUsers();

// async function findOneUser(){
//       try {
//         const oneUser = await users.findOne({userName:'kelly'})
//         console.log(oneUser)
//       } catch ({error}) {
//         console.log(error.message)
//       }
// }
// findOneUser();

// async function findUserAndRemove(){
//     try {
//         const findAndRemove = await users.findOneAndRemove({userName:'tony'})
//         console.log(findAndRemove)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// findUserAndRemove();

async function usersWhere(){
    try {
        const findWhere = await users.where('userName').equals('nick')
        console.log(findWhere)
    } catch (error) {
        console.log(error.message)
    }
}
usersWhere();