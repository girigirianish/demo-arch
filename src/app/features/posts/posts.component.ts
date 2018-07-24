import { Component, OnInit } from "@angular/core";
import { PostSandbox } from "./post.sandbox";
import { Post } from "../../features/posts/post.types";
import { ResultsService } from "../../service/results/results.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private postSandbox: PostSandbox,
    private resultService: ResultsService
  ) {}

  ngOnInit() {
    this.postSandbox.fetchPost().subscribe(data => {
      console.log(data, "data");
      this.posts = data;
    });
    this.resultService.getResult().subscribe(data => {
      console.log(data, "results");
    });
  }
}
