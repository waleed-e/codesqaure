
export interface User{
    id:string;
    firstName : string;
    userName:string;
    lastName:string;
    password :string;
    email:string
}

export interface Post{
    id:string;
    title:string;
    url:string;
    userId:string;
    postedAt:number
}


export interface Like{
    userId:string;
    postId:string;
}

export interface Comment{
    id:string;
    userId:string;
    postId:string;
    comment:string;
    postedAt:number
}