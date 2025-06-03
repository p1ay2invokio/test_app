import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req: Request, res: Response)=>{
    res.status(200).send({message: "API app 2 port 3001 is working"})
})

app.get("/user", (req: Request, res: Response)=>{
    res.status(200).send({message: "Playtwo"})
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})