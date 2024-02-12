import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsInfo } from 'src/app/data/posts';
import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  blog: BlogModel;
  recentBlogList: BlogModel[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const blogId = +params['id']; // Replace 'id' with the actual parameter name for the blog ID
      this.fetchBlogDetails(blogId);
      this.fetchRecentBlogs();
    });
  }

  fetchBlogDetails(blogId: number) {
    this.blog = postsInfo.find(blog => blog.id === blogId) as BlogModel;
  }

  fetchRecentBlogs() {
    this.recentBlogList = postsInfo.slice(1, 4); // Assuming you want to display the second, third, and fourth blog as recent blogs
  }
}