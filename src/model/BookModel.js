const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kp173:<Kp173>@cluster0.hwoma.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;