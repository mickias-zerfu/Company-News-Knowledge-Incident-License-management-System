import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/auth/admin.service';
import { SubAdminModel, SubAdminModelCreate } from 'src/app/models/SubadminModel';
import { ToastService } from 'src/app/services/toast.service';

interface Permission {
  name: string;
}

interface Role {
  name: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userData: SubAdminModelCreate = new SubAdminModelCreate();

  id: any;
  showPassword = false;
  access: any = [];
  allowed = {
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&*"
  };

  subCategory: any = []
  accessArray = [
    { value: 1, name: 'News Management' },
    { value: 2, name: 'Knowledge Management' },
    { value: 3, name: 'Incident Management' },
    { value: 4, name: 'File Management' },
    { value: 5, name: 'License Management' },
    { value: 6, name: 'Service Down Time Management' },
    { value: 7, name: 'Daily CheckList Management' }, 
  ]
  constructor(private fb: FormBuilder,
    private adminservice: AdminService, private router: Router,
    private routes: ActivatedRoute, private toastrService: ToastService) {

  }

  ngOnInit(): void {
    this.userData.access = []
    this.access = []
    this.id = this.routes.snapshot.params['id'];
    if (this.id) {
      this.updateUser(this.id);
    } else {
      this.showPassword = false
    }
  }

  // update user fetch
  updateUser(userId: string) {
    this.adminservice.subAdminById(userId).subscribe(res => {
      // console.log(res)
      this.userData = res as SubAdminModelCreate;
      // console.log(this.userData)
      //this.access = res['response']['access'].map(Number);
    })
    this.showPassword = false
  }
  createNewSubAdmin = async (formData: any) => {
    // console.log(this.userData, 'user data')
    this.adminservice.insertSubAdmin(this.userData).subscribe((response: any) => {
      if (response['message']) {
        this.router.navigate(['user/lists']);
        this.toastrService.showSuccess('success', response['message']);
      } else {
        this.toastrService.showError('error', response['message']);
      }
    });

  }
  updateEditSubAdmin = async (formData: any) => {
    this.adminservice.updateSubAdmin(this.id, this.userData).subscribe((response: any) => {
      if (response['message']) {
        this.router.navigate(['user/' + this.id]);
        this.toastrService.showSuccess('success', response['message']);
      } else {
        this.toastrService.showError('error', response['message']);
      }
    });
  }
  userSubmit = async (formData: any) => {

    if (formData.name.trim().length < 3) {
      this.toastrService.showError('error', 'Invalid Name');
      return
    }
    if (formData.email.trim().length < 3) {
      this.toastrService.showError('error', 'Invalid email');
      return
    }
    if (formData.password) {
      if (formData.password.trim().length < 3) {
        this.toastrService.showError('error', 'Invalid password');
        return
      }
    }
    if (!this.id) {
      this.createNewSubAdmin(formData);
    }
    else {
      this.updateEditSubAdmin(formData);
    }
  };
  getRandomCharFromString = (str: string) => str.charAt(Math.floor(Math.random() * str.length))
  generatePassword = (length: number) => {
    let pwd = "";
    pwd += this.getRandomCharFromString(this.allowed.uppers); //pwd will have at least one upper
    pwd += this.getRandomCharFromString(this.allowed.lowers); //pwd will have at least one lower
    pwd += this.getRandomCharFromString(this.allowed.numbers); //pwd will have at least one number
    pwd += this.getRandomCharFromString(this.allowed.symbols);//pwd will have at least one symbolo
    for (let i = pwd.length; i < length; i++)
      pwd += this.getRandomCharFromString(Object.values(this.allowed).join('')); //fill the rest of the pwd with random characters
    return pwd
  }
  passwordGenerate() {
    let pass = this.generatePassword(6)
    this.userData['password'] = pass
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword
  }
  compareWithFn(item1: any, item2: any) {
    return item1 && item2 ? item1.value === item2.value : item1 === item2;
  }
  accessChange(e: any) {
    this.userData.access = e
    this.access = e
  }
  goBack() {
    window.history.back()
  }
}
