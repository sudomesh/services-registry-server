import Express from 'express';

const PORT = 3000;
const server = Express();

server.get('/', (req, res) => res.send('Hello World!'))

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))