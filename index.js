const http = require('http')
const port = 5000


const server = http.createServer((req, res) => {
    res.end('Hola alumnos')
})
 server.listen(port, () =>{
    console.log('arranca el servidor')
 })