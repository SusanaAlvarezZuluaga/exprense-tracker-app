const userRouter = require('./userRoutes');
const authRouter = require('./authRoutes');
const expenseRouter = require('./expenseRoutes');
const categoryRouter = require('./categoryRoutes');

const apiRouter = require('express').Router();
apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/transactions', expenseRouter);
apiRouter.use('/categories', categoryRouter);

module.exports = apiRouter;
