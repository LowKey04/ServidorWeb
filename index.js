const express = require('express')
const app = express()
const port = process.env.PORT || 5001


//app.use(express.static(__dirname + '/public'))

//motor de plantillas o vistas
app.set('view engine', 'ejs')
app.set('vies', __dirname + '/views ')

app.get('/',(req, res) => {
    res.render('index', {titulo: 'Index con EJS', parametro: 'holis'})
})

app.get('/lenguajes',(req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//const server = http.createServer((req, res) => {
//    res.end('Hola alumnos')
//})
 

app.listen(port, () =>{
    //Las dos sentencias de console.log son correctas
    //console.log('arranca el servidor', port)
    console.log([`Arranca el servidor ${port}`])
 })