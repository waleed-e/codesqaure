import { DataStore } from "..";
import { User, Post, Like, Comment } from "../../types";



export class InMemoryDatabstore implements DataStore{
    private users:User[] = []
    private posts:Post[] = []
    private comments:Comment[] = []
    private likes:Like[] = []

    createUser(user: User): void {
        this.users.push(user)
    }
    getUserByEmail(email: string): User | undefined {
        return this.users.find(u => u.email === email)
    }
    getUserByUsername(userName: string): User | undefined {
        return this.users.find(u=> u.userName === userName )
    }
    createPost(post: Post): void | undefined {
     this.posts.push(post)
    }
    getPosts(): Post[] | undefined {
       return this.posts
    }
    getPost(id: string): Post | undefined {
        return this.posts.find(p => p.id === id)
    }
    deletePost(id: string): void {
    const index = this.posts.findIndex(p => p.id !== id);

    if(index !== -1){
        this.posts.splice(index,1)
    }

    }
    createLike(like: Like): void {
    this.likes.push(like)
    }
    createComment(comment: Comment): void {
       this.comments.push(comment)
    }
    getComments(postId: string): Comment[] {
       return this.comments.filter(c=> c.postId === postId)
    }
    deleteComment(id: string): void {
      const index =  this.comments.findIndex(c =>c.id === id)
      if(index !== -1){
        this.comments.splice(index,1)
    }
    }
    
}