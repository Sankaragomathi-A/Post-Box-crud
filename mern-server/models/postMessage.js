const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    title : {type:String},
    message : {type:String},
    file:{type:String},
    likeCount: {
        type: Number,
        default: 0,
    }
},'postMessages')

module.exports = { PostMessage }