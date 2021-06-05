const mongoose = require('mongoose');
const uri = process.env.MONGOURI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open',err => {
    console.log('Database is connectet to', uri)
});
db.on('error',err => {
    console.log(err)
});