import { log } from 'console'
import express, { RequestHandler } from 'express'
import { db } from './datastore'
import { createPostController, getPostsController } from './controllers/postsController'

const app = express()

app.use(express.json())


const loggerMiddleware: RequestHandler = (req,res,next)=>{
    console.log(Date(),req.method)
    next()
}
app.use(loggerMiddleware)

app.get('/posts',getPostsController)

app.post('/posts',createPostController)

app.listen(3000)