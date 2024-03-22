import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  blog: BlogModel;
  recentBlogList: BlogModel[] = [];
  blogId: number;
  defaultImage: any;


  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

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
}
