import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts.component";

import { PostSandbox } from "./post.sandbox";
import { PostService } from "../../service/post/post.service";

@NgModule({
  imports: [CommonModule],
  declarations: [PostComponent, PostsComponent],
  exports: [PostsComponent],
  providers: [PostSandbox, PostService]
})
export class PostsModule {}
