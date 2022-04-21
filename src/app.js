import express from "express";
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'connection error'))
db.once("open", () => {
    console.log('conexão com banco feita com sucesso');
})

const app = express();
routes(app)
app.use(express.json())

export default app