import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogModel } from '../models/blog.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl: string;// = 'http://localhost:5195/api/news'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl + 'news';
  }

  getBlogById(id: number): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BlogModel>(url);
  }
  uploadBlogImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}Files/PostSingleFile`, formData);
  }
  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.apiUrl, blog);
  }

  getAllBlogs(): Observable<BlogModel[]> {
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<BlogModel[]>(this.apiUrl, {headers});
  }

  updateBlogContent(id: number, content: BlogModel): Observable<BlogModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, content);
  }
  deleteBlog(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
