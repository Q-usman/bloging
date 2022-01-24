const express = require('express')
const app = express()

 const bodyparser = require('body-parser')
var ObjectId = require('mongodb').ObjectId;
const mongo = require('mongodb').MongoClient;
// const mongoose =require('mongoose')
const articleRouter = require('./routes/article');
const db = require('./db');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.set('view engine', 'ejs')
app.get('/',(req,res) =>{
    db.collection('articles').find().toArray((err,articles) =>{

        res.render('articles/index',{ articles : articles})
    }

)})
app.get('/article/:id',(req,res) =>{
    db.collection('articles').findOne({_id: new ObjectId(req.params.id)}, (err,article)=>{
        res.render('articles/articleView', {article:article})
    })
})
app.use('/articles', articleRouter)

// app.listen(3000,() =>{
    //     console.log('its working fine')
    // })
    module.exports = app