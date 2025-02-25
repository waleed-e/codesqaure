import { log } from 'console'
import express, { RequestHandler } from 'express'
import { db } from './datastore'

const app = express()

app.use(express.json())


const loggerMiddleware: RequestHandler = (req,res,next)=>{
    console.log(Date(),req.method)
    next()
}
app.use(loggerMiddleware)

app.get('/posts', (req,res)=>{
    
    res.send({posts:db.getPosts()})

})

app.post('/posts',(req,res)=>{
 
const post = req.body
db.createPost(post)
    res.status(200).json(post)

})

app.listen(3000)