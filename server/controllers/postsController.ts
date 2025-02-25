import { RequestHandler } from "express";
import { db } from "../datastore";
import { Post } from "../types";
import crypot from 'crypto'

export type ExpreesHandler<Req,Res> = RequestHandler<
string,
Partial<Res>,
Partial<Req>,
any
>

export const getPostsController :  ExpreesHandler<{},{}> =  (req,res)=>{
    
    res.send({posts:db.getPosts()})

}

type CreatePostRequest = Pick<Post,'title'| 'url'|'userId'>

interface CreatePostResponse{}

export const createPostController: ExpreesHandler<CreatePostRequest, CreatePostResponse> = (req, res) => {
    

    if (!req.body.title || !req.body.url || !req.body.userId) {
        res.sendStatus(400);
        return;
    }

    const post:Post ={
        id:crypto.randomUUID(),
        postedAt:Date.now(),
        title:req.body.title,
        url:req.body.url,
        userId:req.body.userId
    }

    db.createPost(post);

    res.status(200).json({ post });
};