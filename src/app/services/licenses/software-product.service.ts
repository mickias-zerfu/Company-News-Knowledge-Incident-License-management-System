import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoftwareProduct } from 'src/app/models/software.model';

@Injectable({
  providedIn: 'root'
})
export class SoftwareProductService {
  private baseUrl = '/api/software-products'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getSoftwareProducts(): Observable<SoftwareProduct[]> {
    return this.http.get<SoftwareProduct[]>(this.baseUrl);
  }

  getSoftwareProductById(id: number): Observable<SoftwareProduct> {
    return this.http.get<SoftwareProduct>(`${this.baseUrl}/${id}`);
  }

  createSoftwareProduct(softwareProduct: SoftwareProduct): Observable<SoftwareProduct> {
    return this.http.post<SoftwareProduct>(this.baseUrl, softwareProduct);
  }

  updateSoftwareProduct(id: number, softwareProduct: SoftwareProduct): Observable<SoftwareProduct> {
    return this.http.put<SoftwareProduct>(`${this.baseUrl}/${id}`, softwareProduct);
  }

  deleteSoftwareProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
