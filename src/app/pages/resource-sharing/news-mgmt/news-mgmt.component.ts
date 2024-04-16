import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';

@Component({
  selector: 'app-news-mgmt',
  templateUrl: './news-mgmt.component.html',
  styleUrls: ['./news-mgmt.component.css']
})
export class NewsMgmtComponent implements OnInit {

  blogListObject: BlogModel[];
  constructor(private blogService: BlogService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllBlogs();
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

  addBlog() {
    this.router.navigate(['/resources/news/add']);
  }

  updateBlog(BlogId: number) {
    this.router.navigate(['/resources/news/' + BlogId + '/update']);
  }

  deleteBlog(BlogId: number) {
    this.blogService.deleteBlog(BlogId).subscribe(data => {
      // Toaster
      this.getAllBlogs()
    });
  }
  openConfirmationDialog(fileId: number): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this News?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteBlog(fileId);
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
}
