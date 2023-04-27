import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connections from './config/db/connections.js'
import {AdminRouter, 
        ContactRouter,
        KurmaRouter,
        PromoRouter,
        YoghurtRouter,
        ErrorRouter
} from './routes/routing.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))
app.use(AdminRouter)
app.use(ContactRouter)
app.use(PromoRouter)
app.use(KurmaRouter)
app.use(YoghurtRouter)
app.use(ErrorRouter)

app.listen(port, ()=>{
    Connections()
    console.log(`server running at: http://localhost:${port}`)
})


export default app