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

  getBlog(id: number): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BlogModel>(url);
  }
  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.apiUrl, blog);
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.apiUrl);
  }

  updateBlogContent(id: number, content: string): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    const updatedBlog = { content: content };
    return this.http.put<BlogModel>(url, updatedBlog);
  }
  deleteBlog(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
