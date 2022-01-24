var ObjectId = require('mongodb').ObjectId;
const mongo = require('mongodb').MongoClient; 
const connectionString = 'mongodb+srv://usman:usman123@cluster0.dg9zo.mongodb.net/blog?retryWrites=true&w=majority'
mongo.connect(connectionString,(err,client) =>{
   
    module.exports  = client.db()
    const app = require('./app')

    app.listen(3000,() =>{
        console.log('its working');
    });
});