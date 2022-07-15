const mongoose = require('mongoose');
url = mongoose.connect(process.env.MONGODB_URI || 'mongodb://:localhost27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;