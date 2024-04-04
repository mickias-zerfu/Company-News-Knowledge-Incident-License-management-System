  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class DashboardService {
    private apiUrl = 'http://localhost:5195/api/Dashboard';
    constructor(private http: HttpClient) { }

  // Method to get total counts for all entities
  getTotalCounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/counts`);
  }

  // Method to get monthly statistics for news
  getMonthlyNewsStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-news`);
  }

  // Method to get monthly statistics for incidents
  getMonthlyIncidentStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-incidents`);
  }

  // Method to get monthly statistics for shared resources
  getMonthlySharedResourceStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-shared-resources`);
  }

  // Method to get monthly statistics for knowledge bases
  getMonthlyKnowledgeBaseStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-knowledge-bases`);
  }
  }
