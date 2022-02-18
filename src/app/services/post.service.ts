import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/IPost';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<{ [id: string]: IPost }>(
      `https://angular-rxjs-posts-2e8b5-default-rtdb.firebaseio.com/posts.json`
    ).pipe(map(posts => {

      let postsData: IPost[] = [];
      console.log("posts");
      console.log(posts);

      for (let id in posts) {
        postsData.push({...posts[id],id })
      }
      console.log("service");
      console.log(postsData);
      return postsData;
    }));

  }
}
