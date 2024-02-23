import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-news-mgmt',
  templateUrl: './news-mgmt.component.html',
  styleUrls: ['./news-mgmt.component.css']
})
export class NewsMgmtComponent implements OnInit{
  blogListObject: BlogModel[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  evenBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 0) ? true : false;
  }
  oddBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 1) ? true : false;
  }
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogListObject = data;
      console.log(this.blogListObject);

    });
  }

  // searchBlogs(query: string) {
  //   this.blogService.searchBlogs(query).subscribe(data => {
  //     this.Blogs = data.Blogs;
  //   });
  // }

  addBlog(Blog: any) {
    this.blogService.addBlog(Blog).subscribe(data => {
      // Handle response
    });
  }

  updateBlog(BlogId: number, Blog: any) {
    this.blogService.updateBlogContent(BlogId, Blog).subscribe(data => {
      // Handle response
    });
  }

  deleteBlog(BlogId: number) {
    this.blogService.deleteBlog(BlogId).subscribe(data => {
      // Handle response
    });
  }
}
