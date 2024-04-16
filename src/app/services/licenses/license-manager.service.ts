
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicenseManager } from 'src/app/models/license/LicenseManager';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseManagerService {

  private baseUrl: string;// = 'http://localhost:5195/api/licensemanagers'; // Replace with your API endpointlicensemanagers/0/licenses


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'licensemanagers';
  }

  getLicenseManagers(): Observable<LicenseManager[]> {
    return this.http.get<LicenseManager[]>(this.baseUrl);
  }

  getLicenseManagerById(id: number): Observable<LicenseManager> {
    return this.http.get<LicenseManager>(`${this.baseUrl}/${id}`);
  }

  createLicenseManager(licenseManager: LicenseManager): Observable<LicenseManager> {
    return this.http.post<LicenseManager>(this.baseUrl, licenseManager);
  }


  assignLicensesToManager(licenseId: any, selectedLicenses: any) {
    return this.http.post(`${this.baseUrl}/${licenseId}/assignmanager/`, selectedLicenses);
  }

  checkExpiration() {
    return this.http.post(`${this.baseUrl}licenses/checkexpiration`, '')
  }
  updateLicenseManager(id: number, licenseManager: LicenseManager): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, licenseManager);
  }

  deleteLicenseManager(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
