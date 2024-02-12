import { Component } from '@angular/core';
import { postsInfo } from 'src/app/data/posts';
import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-news-mgmt',
  templateUrl: './news-mgmt.component.html',
  styleUrls: ['./news-mgmt.component.css']
})
export class NewsMgmtComponent {
  blogListObject: BlogModel[];
  constructor() { }

  ngOnInit(): void {
    this.blogListObject = postsInfo;
  }
}
