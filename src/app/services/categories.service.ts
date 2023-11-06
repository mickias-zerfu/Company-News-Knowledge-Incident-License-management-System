import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'https://api.example.com/'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  getAllCategorys(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }
  getCategory(id: number): Observable<CategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CategoryModel>(url);
  }
  addCategory(Category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.apiUrl, Category);
  }
  updateCategoryContent(id: number, content: string): Observable<CategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    const updatedCategory = { content: content };
    return this.http.put<CategoryModel>(url, updatedCategory);
  }
  deleteCategory(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
