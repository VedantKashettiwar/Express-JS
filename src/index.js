const path = require('path');
const express = require('express');
const app = express();
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, '../public')
// console.log(staticPath)

//builtin middleware
app.use(express.static(staticPath));

// to set the view engine 
app.set('view engine','hbs');

app.get('',(req, res)=>{
    res.render('index',{name:'Vedant'});
});

app.get('/',(req, res)=>{
    res.send('hello world from the express');
});
app.get('/about',(req, res)=>{
    res.send('hello world from the about');
});


app.listen(8000, ()=>{
    console.log('listening the port at 8000')
});


// const express = require('express');
// const app = express()
// const templatePath = path.join(__dirname, '../templates')
// app.set('view engine','hbs')
// app.set('views',templatePath)
// app.get('/',(req, res)=>{
//     // res.send('Home')
//     res.render('index',{name:'Vedant'})
// });
// app.get('/about',(req, res)=>{
//     res.send('About')
// });
// app.get('/contact',(req, res)=>{
//     res.send('Contact')
// });
// app.listen(8000,()=>{
//     console.log('Server started at port number 8000')
// });