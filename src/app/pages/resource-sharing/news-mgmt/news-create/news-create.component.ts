import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { FileDetails } from 'src/app/models/fileDetail.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  post: BlogModel = new BlogModel();
  isEditMode: boolean = false;
  postId: number;
  imagePreview: string | ArrayBuffer | null;
  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private blogservice: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.isEditMode = data['isEditMode'] || false;
    });
    if (this.isEditMode) {
      this.route.params.subscribe(params => {
        this.postId = params['id'];
        // getbyId
        this.blogservice.getBlogById(this.postId).subscribe(data => {
          this.post = data;
        })
      });
    }
  }
  handleImageUpload(event: any) {
    const fileToUpload = event.target.files[0];
    // display image
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    if (fileToUpload) {
      reader.readAsDataURL(fileToUpload);
    }

    // upload image
    const formData = new FormData();
    formData.append('fileDetails.FileDetails', fileToUpload);
    this.blogservice.uploadBlogImage(formData)
      .subscribe(
        (res) => {
          console.log('Upload success.', res);
          this.post.image_url = res.fileUrl;
          this.onUploadFinished.emit(res);
        },
        (error: any) => {
          console.log('Upload error:', error);
        }
      );
  }

  submitPost() {
    // check idEditMode
    if (this.isEditMode && this.post.id !== undefined) {
      this.UpdatePost(this.post.id);
    }
    else {
      // Add your logic here to handle the submission of the post
      this.post.created_at = new Date().toDateString();
      this.blogservice.addBlog(this.post).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/resources/managenews']);
        }
      )
      console.log(this.post);
    }
  }

  UpdatePost(postId: number) {
    this.post.created_at = this.post.created_at;
    this.post.created_at = new Date().toDateString();
    this.blogservice.updateBlogContent(postId, this.post).subscribe(
      (res) => {
        this.router.navigate(['/resources/managenews']);
        console.log(res);
      }
    )
  }
}
