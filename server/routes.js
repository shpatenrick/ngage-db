var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var helpers = require('./routeHelpers');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors());


app.get('/', (req, res) => {res.send('Hello world')});

// USERS
app.get('/allU', helpers.getAllUsers);

//LOGIN
app.post('/login', helpers.login); // good

// ANSWERS
app.get('/allA', helpers.getAllAnswers); // good
app.get('/aByQ/:id', helpers.getAnswers); // good
app.get('/aByCorrect/:qid', helpers.getCorrectAnswer);// good
app.post('/aByQ', helpers.postAnswer); // good+
app.post('/aByQs', helpers.postAnswers); // good
app.put('/updateA/:aid', helpers.updateAnswer); // good
app.delete('/deleteA/:aid', helpers.deleteAnswer); // good

// QUESTIONS
app.get('/allQ', helpers.getAllQuestions); // good
app.get('/qBySocket/:socket', helpers.getQuestions); // good
app.get('/qByP/:pid', helpers.getQuestionsByP) // good
app.post('/qByP', helpers.postQuestion); // good+
app.put('/updateQ/:qid', helpers.updateQuestion); // good+
app.delete('/deleteQ/:qid', helpers.deleteQuestion); // good+

// PRESENTATION
app.get('/pBySocket/:socket', helpers.getPresentationByS); //good
app.get('/pByU/:id', helpers.getPresentationByU); // good
app.get('/pByULatest/:id/', helpers.getLatestPresentationByUser); // good
app.post('/postPByU', helpers.postPresentation); // good+
app.put('/updateP/:pid', helpers.updatePresentation); // good
app.delete('/deleteP/:pid', helpers.deletePresentation); // good

// SESSION
app.get('/sByS/:socket', helpers.getSession); // good
app.get('/sAll', helpers.getAllSessions); // good
app.post('/sByPS', helpers.postSession); // good+

// RESPONSE
app.get('/rByQ/:qid', helpers.getResponseByQuestion); //good
app.get('/rByS/:sessionID', helpers.getResponseBySession); //good
app.get('/rByQS/:qid/:sessionID', helpers.getResponseByQandS);// good
app.post('/rPost', helpers.postResponse); //good+
app.post('/rPostMultiple', helpers.postMultiResponses); //good

module.exports = app;