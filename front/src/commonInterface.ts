export interface NewPost {
  id:number,
  author:string,
title:string,
timeStamp:string | number,
content:string,
}

export interface Posts {
  id:number,
  author: string, 
  title:string,
  timestamp: string | number , 
  content: string, 
}

export interface AppState {
  posts: {postList: NewPost[]}
}

export interface FilterNative {
  full_name:string;
  id:number;
  gender?:string;
  level:string;
  course:string[];
  email:string;
}

export interface NativeFilterData3 {
  full_name:string;
  id:number;
  gender?:string;
  level:string[];
  course:string[];
  email:string;
}