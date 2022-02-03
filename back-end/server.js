const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { errorHandling } = require('./middleware');

const apiRouter = require('./routes');

const app = express();

const PORT = process.env.SERVER_PORT || 4001;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());

//use all the routes
app.use('/api', apiRouter);

app.use(errorHandling.handleError);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
