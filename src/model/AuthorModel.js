const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kp173:<Kp173>@cluster0.hwoma.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;