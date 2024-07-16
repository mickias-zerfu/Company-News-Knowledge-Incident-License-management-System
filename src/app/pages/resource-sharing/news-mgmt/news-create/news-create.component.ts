import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { QuillModule } from 'ngx-quill'
import { BlogService } from 'src/app/services/blog.service';
import { ToastService } from 'src/app/services/toast.service';

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

  maxFileSize = 5 * 1024 * 1024; // 5 MB
  allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();
  @ViewChild('newsForm') newsForm: NgForm;
  constructor(private blogservice: BlogService, private router: Router, private route: ActivatedRoute,
    private toastService: ToastService) { }

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
    // File size validation
    if (fileToUpload.size > this.maxFileSize) { 
      this.toastService.showError('File size exceeds the maximum allowed limit.','close',2000);
      return;
    }

    // File extension validation
    const fileExtension = fileToUpload.name.split('.').pop().toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      this.toastService.showError('File type is not allowed.', 'close', 2000);
      return;
    } 
    if (fileToUpload.name.length >= 25) {
      this.toastService.showError('File name character length more than 25 is not allowed.', 'close', 2000);
      return;
    }
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
          this.post.image_url = res.fileUrl;
          this.onUploadFinished.emit(res);
        },
        (error: any) => {
          this.toastService.showError(error.error.message, 'Close', 4000);
        }
      );
  }

  triggerValidation(controlName: string) {
    this.newsForm.controls[controlName].markAsTouched();
    this.newsForm.controls[controlName].updateValueAndValidity();
  }
  submitPost() {
    if (this.newsForm.valid) {
      if (this.isEditMode && this.post.id !== undefined) {
        this.UpdatePost(this.post.id);
      }
      else {
        if (!this.post.image_url) {
          this.toastService.showError('Image is required.', 'Close', 2000);
          return;
        }
        this.post.created_at = new Date().toDateString();
        this.blogservice.addBlog(this.post).subscribe(
          (res) => {
            this.router.navigate(['/resources/managenews']);
            this.toastService.showSuccess('News posted successfully.', 'Close', 2000);
          }
        )
      }
    }
  }

  UpdatePost(postId: number) {
    this.post.created_at = this.post.created_at;
    this.post.updated_at = new Date().toDateString();
    this.blogservice.updateBlogContent(postId, this.post).subscribe(
      (res) => {
        this.router.navigate(['/resources/managenews']);
        this.toastService.showSuccess('News updated successfully', 'Close', 2000);
      }
    )
  }
}
