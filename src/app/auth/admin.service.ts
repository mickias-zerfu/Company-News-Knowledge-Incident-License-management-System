import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // 'http://localhost:5195/api/admin/getSingleSubAdmin?request=1' \
  baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '';
  }

  AddSuperAdminInit() {
    return this.http.post(`${this.baseUrl}Startup`,'')
  }
  getAdminList(data: any) {
    return this.http.post(`${this.baseUrl}admin/getSubAdmin`, data)
  }

  inactiveSubadmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/inactiveSubadmin`, data)
  }

  activeSubadmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/activeSubadmin`, data)
  }

  deleteSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/deleteSubAdmin`, data)
  }
  insertSubAdmin(data: any) {
    console.log('data',data)
     return this.http.post(`${this.baseUrl}admin/insert`, data)
  }
  updateSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/updateSubAdmin`, data)
  }
  getSingleSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/getSingleSubAdmin`, data)
  }

  export(data: any) {
    return this.http.post(`${this.baseUrl}admin/export`,data)
  }

  multiStatusChange(data: any) {
    return this.http.post(`${this.baseUrl}admin/multiStatusChange`, data)
  }

  multiDelete(data: any) {
    return this.http.post(`${this.baseUrl}admin/multiDelete`, data)
  }
}
