const express = require("express");
const path = require("path");
const app = express(); 
const port = 500;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
   
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
   
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.get('/about', (req, res)=>{
   
    const params = {}
    res.status(200).render('about.pug', params);
})
app.get('/classes', (req, res)=>{
   
    const params = {}
    res.status(200).render('classes.pug', params);
})


app.post('/', (req, res)=>{
      console.log(req.body)
    const params = {'message': 'your form has been submitted successfully'}
    res.status(200).render('contact.pug', params);
})
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
