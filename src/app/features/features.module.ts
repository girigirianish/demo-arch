import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsModule } from "./posts/posts.module";

const imports = [CommonModule, PostsModule];

@NgModule({
  imports: imports,
  declarations: [],
  exports: [PostsModule]
})
export class FeaturesModule {}
