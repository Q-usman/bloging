const express = require('express')
// const parser = require('body-parser')
const db = require('../db').collection('articles')
const router = express.Router()
const app = express()
router.get('/new', (req, res) =>{

    res.render('articles/new')
})
router.post('/new',(req, res) =>{
db.insertOne({title : req.body.title,descrip : req.body.description,content : req.body.markdown})
res.send('submitted')
})

module.exports = router