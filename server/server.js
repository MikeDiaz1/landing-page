import Express from 'express'

var app = Express()

app.use(express.static('dist'))
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/../public/index.html')
})

console.log('hello')
app.listen(3000)