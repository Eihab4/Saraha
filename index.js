import express from 'express';
import { dbConnection } from './DataBase/dbConnection.js';
import { userRouter } from './src/modules/user/user.routes.js';
import { messageRouter } from './src/modules/message/message.routes.js';
import appError from './src/utils/appError.js';
import { globalError } from './src/middleware/globalError.js';

process.on('uncaughtException', (err) => {
    console.log('There was an uncaught error', err);
});

const app = express();
const port = 3000;

app.use(express.json());

app.use("/user",userRouter);
app.use('/message', messageRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.use("*", (req, res, next) => {
    next(new appError(`path error ${req.originalUrl}`, 404));
});

app.use(globalError);

process.on('unhandledRejection', (err) => {
    console.log(err);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
