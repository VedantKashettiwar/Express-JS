const express = require('express');
const app = express();
const fs =require('fs');

app.get('/',(req,res)=>{
    let reader=fs.createReadStream('trial.json')
    reader.pipe(res); ///By Pipe Way

    ///By Normal Streaming
    // reader.on('data',(data)=>{
    //     res.write(data.toString())
    // });
    // reader.on('end',()=>{
    //     res.end();
    // });
});
app.get('/about',(req,res)=>{
    res.send('about page');
});
app.listen(8001,()=>{
    console.log('Running server at 8001 port');
});