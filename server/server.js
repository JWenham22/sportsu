const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const port = 4000;

// Import Routers
const authRouter = require('./controllers/userControllers/auth.js');
const testJwtRouter = require('./controllers/userControllers/test-jwt.js');
const usersRouter = require('./controllers/userControllers/users.js');
const sportsRouter = require('./controllers/sportsControllers/sports.js');
const teamsRouter = require('./controllers/sportsControllers/teams.js');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);
app.use('/sports', sportsRouter);
app.use('/teams', teamsRouter);

// Start the server and listen on port 4000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});