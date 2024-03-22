import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoftwareProduct } from 'src/app/models/license/software.model';

@Injectable({
  providedIn: 'root'
})
export class SoftwareProductService {
  private baseUrl = 'http://localhost:5195/api/softwareproducts'; // Replace with your API endpoint

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

  updateSoftwareProduct(id: number, softwareProduct: SoftwareProduct): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, softwareProduct);
  }

  deleteSoftwareProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
