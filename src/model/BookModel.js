const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://Kp173:Kp173@cluster0.hwoma.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;