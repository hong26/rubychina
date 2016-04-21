const  express=require('express');

const server = express()

server.use(express.static(__dirname + '/public'))

server.use('/assets', express.static('assets'));

server.get('*',(request,response)=>{
  response.sendFile(__dirname+'/public/test.html')
})
server.listen(3000,()=>{
  console.log("server is running on:localhost:3000")
})
