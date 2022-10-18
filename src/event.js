const http =require('http');
const EventEmitter = require('events');
const event = new EventEmitter();
let count = 0;
event.on('Hello',()=>{
    count ++;
    console.log(`Count is ${count}`)
})

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        event.emit('Hello');
        res.end('home page')
    }
    else if(req.url === '/about'){
        event.emit('Hello');
        res.end('about page')
    }
    else if(req.url === '/search'){
        event.emit('Hello');
        res.end('search page')
    }
    else{
        res.writeHead(404,{'context-type':'text/http'});
        res.end('404, Page not found')
    }
});

server.listen(8000,()=>{
    console.log('Server Started')
})


