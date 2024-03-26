import { NewsComment } from "./comment.model";

export class BlogModel {
  id: number;
  title: string;
  content: string;
  image_url: string;
  comments: NewsComment[];
  created_at: string;
  updated_at: string;
}
