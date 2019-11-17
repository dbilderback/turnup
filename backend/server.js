import express from 'express';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { google } from './config';

// Transform Google profile into user object
const transformGoogleProfile = (profile) => ({
  id: profile.id,
  name: profile.displayName,
});

// Register Google Passport strategy
passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done) => {
    console.log("use: " + JSON.stringify(profile))
    done(null, transformGoogleProfile(profile._json))
  }
));

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the sessions
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Initialize http server
const app = express();

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google'
  }),
  (req, res) => {
    console.log(JSON.stringify(req.user));
    res.redirect('oAuthLogin://login?user=' + JSON.stringify(req.user));
  });

app.get('/map', isLoggedIn, function (req, res) {
  console.log("Got Here"),
    res.render('MainPage.js', {
      user: req.user // get the user out of session and pass to template
    });
});

function isLoggedIn(req, res, next) {
  console.log("isloggedin");
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}

// Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

app.use(passport.initialize());
app.use(passport.session());

// // Daryl code
// import path from 'path';
// import logger from 'morgan';
// import compresison from 'compression';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser'
// import expressValidator from 'express-validator';
// import dotenv from 'dotenv';
// import React from 'react';
// import ReactDOM from 'react-dom/server';
// import Router from 'react-router';
// import Provider from ('react-redux').Provider;
// import exphbs from 'express-handlebars';
// import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';

// // Load environment variables from .env file
// dotenv.load();

// // ES6 Transpiler
// require('babel-core/register');
// require('babel-polyfill');

// // Models
// var User = require('./models/User');

// // Controllers
// var userController = require('./controllers/user');
// var contactController = require('./controllers/contact');
// var eventsController = require('./controllers/events');

// // React and Server-Side Rendering
// var routes = require('./app/routes');
// var configureStore = require('./app/store/configureStore').default;

// var app = express();


// mongoose.connect(process.env.MONGODB);
// mongoose.connection.on('error', function () {
//   console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
//   process.exit(1);
// });


// var hbs = exphbs.create({
//   defaultLayout: 'main',
//   helpers: {
//     ifeq: function (a, b, options) {
//       if (a === b) {
//         return options.fn(this);
//       }
//       return options.inverse(this);
//     },
//     toJSON: function (object) {
//       return JSON.stringify(object);
//     }
//   }
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('port', process.env.PORT || 3000);
// app.use(compression());
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//   req.isAuthenticated = function () {
//     var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
//     try {
//       return jwt.verify(token, process.env.TOKEN_SECRET);
//     } catch (err) {
//       return false;
//     }
//   };

//   if (req.isAuthenticated()) {
//     var payload = req.isAuthenticated();
//     User.findById(payload.sub, function (err, user) {
//       req.user = user;
//       next();
//     });
//   } else {
//     next();
//   }
// });

// app.post('/contact', contactController.contactPost);
// app.get('/events', eventsController.eventsGet);
// app.put('/account', userController.ensureAuthenticated, userController.accountPut);
// app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
// app.post('/signup', userController.signupPost);
// app.post('/login', userController.loginPost);
// app.post('/forgot', userController.forgotPost);
// app.post('/reset/:token', userController.resetPost);
// app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
// app.post('/auth/google', userController.authGoogle);
// app.get('/auth/google/callback', userController.authGoogleCallback);

// // React server rendering
// app.use(function (req, res) {
//   var initialState = {
//     auth: { token: req.cookies.token, user: req.user },
//     messages: {}
//   };

//   var store = configureStore(initialState);

//   Router.match({ routes: routes.default(store), location: req.url }, function (err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message);
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       var html = ReactDOM.renderToString(React.createElement(Provider, { store: store },
//         React.createElement(Router.RouterContext, renderProps)
//       ));
//       res.setHeader("Content-Type", "text/html")
//       res.render('layouts/main', {
//         html: html,
//         initialState: store.getState()
//       });
//     } else {
//       res.sendStatus(404);
//     }
//   });
// });

// // Production error handler
// if (app.get('env') === 'production') {
//   app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.sendStatus(err.status || 500);
//   });
// }