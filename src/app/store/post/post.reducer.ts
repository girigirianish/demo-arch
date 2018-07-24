import { Post } from "./post.model";
import * as PostActionTypes from "./post.actions";

export function PostReducer(state: Post[] = [], action) {
  switch (action.type) {
    case PostActionTypes.RECIEVE_POSTS:
      return [...state, action.payload];
    default:
      return state;
  }
}
