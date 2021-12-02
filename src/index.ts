import express from 'express';

import indexRouter from './routes';

const port = process.env.PORT || '3000';
const server = express();

server.use(express.urlencoded({ extended: false }));
server.use("/", indexRouter);
server.listen(port, () => {
  console.log('app server started on port', port)
});
