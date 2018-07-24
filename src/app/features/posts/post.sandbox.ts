import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { PostService } from "../../service/post/post.service";

import { Observable } from "rxjs";

import { RECIEVE_POSTS } from "../../store/post/post.actions";
import { Post } from "../../features/posts/post.types";

@Injectable()
export class PostSandbox {
  constructor(private store: Store<Post>, private postService: PostService) {}
  fetchPost(): Observable<Post[]> {
    return this.postService.getPost();
  }
}
