//we do't need to export it because it is pre define module
// when we create a server that computer recive response it act like a server if we rise the reponse we act like a client
//when we want intract with server the server need IP adress of computer and PORT where it is running
const http = require('http')
let PORT = 3000
const server = http.createServer((req,res)=>{
    console.log('rewuest recived')
    console.log(res)
    console.log(req)
    if(req.url=='/'){
        res.write('this is my home')
    }
    else if(req.url =='/ping'){
        res.write('pong')
    }
    else{
        res.write("hello ambuj")
    }
    res.end()
})

server.listen(PORT,()=>{
    //CALLBACk triggerd when server is sucessfull running ,
    console.log('server is running on: htttps://localhost:',PORT)
})