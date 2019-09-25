import Express from 'express';
import ZoneFileRequestHandler from './RequestHandlers/ZoneFile';

const PORT = 3000;
const server = Express();

server.use(Express.static('client-dist'));

server.use(function(req, res, next) {
    if(process.env.NODE_ENV !== 'production'){
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });

server.get('/zonefile', ZoneFileRequestHandler)

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))