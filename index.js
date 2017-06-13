const express = require('express')

const bodyParser= require('body-parser')

const app = express();

app.listen(3000, function(){
  console.log('The Swagdoodle Of All Swagdoodles');
})

app.use(express.static('assest'))
app.use(bodyParser.json())

const messages = [
 {
   messages: 'This Is Message',
   message: 'Wub Dub Ab Luh Do Da Doo'
}
]

app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages:messages })

})

app.post('/messages', function(req, res, next){
  //console.log(req.body);
  //console.log(req.body.message);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages })
})
