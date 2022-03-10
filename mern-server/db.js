const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:3000/youtube-merial',{useNewUrlParser:true,useUnifiedTopology:true},
//     err => {
//         if (!err)
//             console.log('Mongodb connection succeeded.')
//         else
//             console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
//     })

mongoose.connect("mongodb+srv://youtube-merial:youtube-merial@cluster0.xay3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
err=>{
    if(!err)
    console.log("Mongodb connection your application");
    else
    console.log("error while conneting mongodb:" ,JSON.stringify(err,undefined,4));
})