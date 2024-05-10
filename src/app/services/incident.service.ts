import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl:string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl + 'Incident';
  }

  getAllIncidents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getIncidentById(IncidentId: number): Observable<any> {
    const url = `${this.apiUrl}/${IncidentId}`;
    return this.http.get<any>(url);
  }

  searchIncidents(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any>(url);
  }

  addIncident(Incident: any): Observable<any> {
    console.log(Incident);
    return this.http.post<any>(this.apiUrl, Incident);
  }
  updateIncident(IncidentId: number, Incident: any): Observable<any> {
    const url = `${this.apiUrl}/${IncidentId}`;

    console.log(Incident, "inside sending to the api ")
    return this.http.put<any>(url, Incident);
  }

  deleteIncident(IncidentId: number): Observable<any> {
    const url = `${this.apiUrl}/${IncidentId}`;
    return this.http.delete<any>(url);
  }
}
