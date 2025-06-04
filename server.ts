import express, {Request, Response} from 'express'
import cors from 'cors'
import os from 'os'


const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req: Request, res: Response)=>{
    res.status(200).send({message: "API app 2 port 3001 is working"})
})

app.get("/user", (req: Request, res: Response)=>{
    res.status(200).send({message: "Playtwo"})
})

app.get("/uptime", (req: Request, res: Response)=>{

    let total_sec = os.uptime()
    let sec = Math.floor(total_sec % 60)
    let min = Math.floor((total_sec % (60 * 60)) / 60)
    let hrs = Math.floor(total_sec / (60 * 60))


    res.status(200).send({status: 'active', uptime: `${hrs} hrs ${min} min ${sec} sec`})
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})