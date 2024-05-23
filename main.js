const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res,) {
  res.send('Hello World'+req.query.a)

})
app.post('/requir',(req, res)=>{
	res.send('Post request'+req.body.a)
})

app.listen(3000)