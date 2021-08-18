const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')


//@@desc     Renders the index page
router.get('/',  (req, res) => {
    res.render('contact')
})


//renders the dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

//handles the form
router.post('/recieved', async (req, res) => {
    const contact = await Contact.create(req.body)
    await contact.save()
    res.redirect('/')
    
})

//displays all messages
router.get('/message', async (req, res) => {
    const messages = await Contact.find().sort({date: -1}).lean()
   
    res.render('message', {list: messages})
})


module.exports = router