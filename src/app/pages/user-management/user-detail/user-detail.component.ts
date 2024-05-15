import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../auth/admin.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  userId: string;
  accessArray = [
    { value: 1, name: 'News Management' },
    { value: 2, name: 'Knowledge Management' },
    { value: 3, name: 'Incident Management' },
    { value: 4, name: 'File Management' },
    { value: 5, name: 'License Management' },
    { value: 6, name: 'Service Down Time Management' },
    { value: 7, name: 'Daily CheckList Management' },
    { value: 8, name: 'User Management' },
  ]
  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService, private toastrService: ToastService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']; 
      this.fetchUserDetails(this.userId);
    });
  }

  fetchUserDetails(userId: string) {
    this.adminService.subAdminById(userId).subscribe(User => {
      this.user = User;
      this.user.access = this.user.access
        .map((access: any) => {
          return this.accessArray.find(option => option.value === access)?.name;
        });

      console.log(this.user)
    });
  }

  InactiveUser(id: string ): boolean {
    if (confirm('Are you sure you want to Change status?')) {
      console.log(id);
      this.adminService.inactiveSubadmin(id).subscribe(
        (response: any) => {
          this.toastrService.showSuccess('success', response['message']);
        },
        (error) => {
          console.error(error);
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  }

  ActiveUser(id: string ): boolean {
    if (confirm('Are you sure you want to Change status?')) {
      console.log(id);
      this.adminService.activeSubadmin(id).subscribe(
        (response: any) => {
          this.toastrService.showSuccess('success', response['message']);
        },
        (error) => {
          console.error(error);
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  }
  deleteUser(id: string ): boolean {
    if (confirm('Are you sure you want to Delete user?')) {
      console.log(id);
      this.adminService.deleteSubAdmin(id).subscribe(
        (response: any) => {
          this.toastrService.showSuccess('success', response['message']);
        },
        (error) => {
          console.error(error);
          this.toastrService.showError('danger', 'There was an error please try after some time!!');
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  } 

}
