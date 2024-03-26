import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { NewsComment } from 'src/app/models/comment.model';
import { BlogService } from 'src/app/services/blog.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  blog: BlogModel;
  comment = new NewsComment();
  recentBlogList: BlogModel[] = [];
  blogId: number;
  defaultImage: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router, private blogService: BlogService, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogId = +params['id']; // Replace 'id' with the actual parameter name for the blog ID
      this.fetchBlogDetails(this.blogId);
      this.fetchRecentBlogs();
    });

  }

  onError() {
    this.defaultImage = '../../../../../assets/imageNotLoading.png';
  }

  fetchBlogDetails(blogId: number) {
    this.blogService.getBlogById(blogId).subscribe(blog => {
      this.blog = blog;

      // this.blog.image_url = `http://localhost:5195/api/SharedResource/Images/${this.blog.image_url}`;
      console.log(this.blog, 'blog single');

    });
  }

  fetchRecentBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.recentBlogList = data.slice(0, 4);
      console.log(this.recentBlogList, 'recents . . . ');

    });
    // this.recentBlogList = postsInfo // Assuming you want to display the second, third, and fourth blog as recent blogs
  }
  onSubmit() {
    const newsId = this.blogId;
    const currentDate = new Date();
    this.comment.createdAt = currentDate;
    this.comment.updatedAt = currentDate;

    this.commentService.addComment(newsId, this.comment).subscribe(
      (newComment) => {
        console.log('Comment added:', newComment);
        const currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl).then(() => {
          this.router.navigated = false;
          location.reload();
          // this.router.navigate([this.router.url]);
        });
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }
}
