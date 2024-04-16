import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsComment } from '../models/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl: String;
    constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'Comment';
  }

  // Get comments for a specific news
  getComments(newsId: number): Observable<NewsComment[]> {
    return this.http.get<NewsComment[]>(`${this.baseUrl}/${newsId}/comments`);
  }

  // Add a new comment to a news
  addComment(newsId: number, comment: NewsComment): Observable<NewsComment> {
    return this.http.post<NewsComment>(`${this.baseUrl}/${newsId}/comments`, comment);
  }

  // Update a comment
  updateComment(commentId: number, comment: NewsComment): Observable<NewsComment> {
    return this.http.put<NewsComment>(`${this.baseUrl}/comments/${commentId}`, comment);
  }

  // Delete a comment
  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/comments/${commentId}`);
  }
}
