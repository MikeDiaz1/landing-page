import Express from 'express'

const app = Express()
const PORT = 5050

app.use(Express.static('dist'))
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/../public/index.html')
})

app.listen(PORT)
console.log('Listening on port: ' + PORT)