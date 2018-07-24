import { Component, OnInit } from "@angular/core";
import { PostSandbox } from "./post.sandbox";
import { Post } from "../../features/posts/post.types";

import { Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postSandbox: PostSandbox) {}

  ngOnInit() {
    this.postSandbox.fetchPost().subscribe(data => {
      console.log(data, "data");
      this.posts = data;
    });
  }
}
