import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  private apiUrl = 'http://localhost:5195/api/KnowledgeBase';
  constructor(private http: HttpClient) { }

  getAllKnowledges(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getKnowledgeById(KnowledgeId: number): Observable<any> {
    const url = `${this.apiUrl}/${KnowledgeId}`;
    return this.http.get<any>(url);
  }

  searchKnowledges(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any>(url);
  }

  addKnowledge(Knowledge: any): Observable<any> {
    console.log(Knowledge);
    return this.http.post<any>(this.apiUrl, Knowledge);
  }
  updateKnowledge(KnowledgeId: number, Knowledge: any): Observable<any> {
    const url = `${this.apiUrl}/${KnowledgeId}`;
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set content type to JSON
    return this.http.put<any>(url, Knowledge);
  }

  deleteKnowledge(KnowledgeId: number): Observable<any> {
    const url = `${this.apiUrl}/${KnowledgeId}`;
    return this.http.delete<any>(url);
  }
}
