import { createServer, IncomingMessage, ServerResponse} from 'http'

type errorType ={
   error:string | any
}

const port = 5000
const host = "0.0.0.0"

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end('Hello world!');
});


 
server.listen(port,host,() => {
    console.log(`Server listening on port ${port} ,${host}`);

});

console.log(server.ref())