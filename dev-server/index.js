import express from 'express';
const app = express();
const port = 3000;
import { registerRoutes } from './routes';
import { setEnvironvent } from './config/env';
import { connectToDB } from './config/db';

setEnvironvent(app);
connectToDB();
registerRoutes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send(
      'Running in development mode.'
    )
  } else {
    return res.sendFile('index.html', {root: __dirname + '/../dist/'});
  }
});

app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}` + ' ' +
  process.env.NODE_ENV + ' mode!');
});