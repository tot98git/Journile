const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name:String,
    date:Date,
    done:Boolean
});
module.exports =mongoose.model('todoSchema',todoSchema);