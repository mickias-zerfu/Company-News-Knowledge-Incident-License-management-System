import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  blogListObject: BlogModel[];
  defaultImage:any=null;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
  }
  onError() {
    this.defaultImage = '../../../../../assets/imageNotLoading.png';
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
}
