const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://Kp173:Kp173@cluster0.hwoma.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;