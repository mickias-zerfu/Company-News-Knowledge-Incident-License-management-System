import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:5195/api/news'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getBlogById(id: number): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BlogModel>(url);
  }
  uploadBlogImage(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:5195/api/Files/PostSingleFile', formData);
  }
  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.apiUrl, blog);
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.apiUrl);
  }

  updateBlogContent(id: number, content: BlogModel): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    // const updatedBlog = { content: content };
    console.log(content);
    return this.http.put<any>(url, content);
  }
  deleteBlog(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
