const mongoose = require('mongoose')
const MONGO_URL = 'mongodb://127.0.0.1/PruebaLogin'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log(`Conexion a mongo con exito`)
}).catch ( (err)=> {
    console.log(`Error al conectarse a mongo`, err)
})


module.exports = mongoose