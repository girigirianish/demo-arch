import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs";
import { Post } from "../../features/posts/post.types";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
