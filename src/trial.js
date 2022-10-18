const express =require('express');
const app = express();
const fs= require('fs');

app.get('/',(req,res)=>{
    let reader = fs.createReadStream('trial.json');
    reader.on('data',(data)=>{
        res.write(data.toString())
    })
    reader.on('end',()=>{
        res.end();
    })
    // res.end('Home Page')
});
app.get('/about',(req,res)=>{
    res.end('About Page')
});


app.listen(8000,()=>{
    console.log('server is started at port no 8000');
})