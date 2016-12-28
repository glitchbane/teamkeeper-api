var express = require('express');
var userRouter = express.Router();
var userHandler = require('./user.handler');

userRouter.post('', userHandler.SaveUser);
// router.post('/:id', UserHandler.UpdateUser);

userRouter.post('/login', userHandler.LogUserIn);

userRouter.post('/logout', userHandler.LogUserOut);


module.exports = userRouter;


