import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post(`${this.baseUrl}Startup/start`, '')
  }
  getAdminList(data: any) {
    // debugger
     let token = localStorage.getItem('token')
     let headers = new HttpHeaders();
     headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}admin/getSubAdmin`, {headers} )
  } 
  inactiveSubadmin(id: string) {
    return this.http.post(`${this.baseUrl}admin/inactiveSubadmin`, { id });
  }

  activeSubadmin(id: string) {
    return this.http.post(`${this.baseUrl}admin/activeSubadmin`, { id });
  }
  deleteSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/deleteSubAdmin`, {data})
  }
  insertSubAdmin(data: any) {
    console.log('data', data)
    return this.http.post(`${this.baseUrl}admin/insert`, data)
  }
  updateSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/updateSubAdmin`, data)
  }
  getSingleSubAdmin(data: any) {
    return this.http.post(`${this.baseUrl}admin/getSingleSubAdmin`, data)
  }
  subAdminById(id: string) {
    console.log("................", id)
    return this.http.post(`${this.baseUrl}admin/subAdminById`, { id });
  }
  checkEmailExists(email: string) {
    return this.http.get<boolean>(this.baseUrl + 'admin/emailExists?email=' + email);
  }
  multiStatusChange(data: any) {
    return this.http.post(`${this.baseUrl}admin/multiStatusChange`, data)
  }

  multiDelete(data: any) {
    return this.http.post(`${this.baseUrl}admin/multiDelete`, data)
  }
}
