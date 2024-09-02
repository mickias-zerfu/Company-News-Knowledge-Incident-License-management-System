import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from 'src/app/models/license/license.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseCrudService {
  private baseUrl:string; // = 'http://localhost:5195/api/licenses'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'licenses';
  }

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.baseUrl);
  }
  getLicenseById(id: number): Observable<License> {
    return this.http.get<License>(`${this.baseUrl}/${id}`);
  }
  createLicense(license: License): Observable<License> {
    return this.http.post<License>(this.baseUrl, license);
  }

  // assignLicenseManagers(licenseId: any, selectedManagers: any) {
  //   return this.http.post(`${this.baseUrl}/assignmanager/${licenseId}`, selectedManagers);
  // }

  assignLicenseManagers(licenseId: number, selectedManagers: number[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    console.log('Payload being sent:', selectedManagers);
    
    return this.http.post(`${this.baseUrl}/assignmanager/${licenseId}`, selectedManagers, { headers });
  }

  updateLicense(id: number, license: License): Observable<License> {
    return this.http.put<License>(`${this.baseUrl}/${id}`, license);
  }

  deleteLicense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
