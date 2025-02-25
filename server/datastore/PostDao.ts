import { Post } from "../types";

export interface PostDao{

    createPost(post:Post):void;
    getPosts():Post[]|undefined;
    getPost(id:string):Post|undefined;
    deletePost(id:string):void;
}