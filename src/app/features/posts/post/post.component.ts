import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../../features/posts/post.types";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Post = new Post();
  constructor() {}

  ngOnInit() {}
}
