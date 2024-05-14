import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../auth/admin.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  userId: string;
  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']; 
      this.fetchUserDetails(this.userId);
    });
  }

  fetchUserDetails(userId: string) {
    this.adminService.subAdminById(userId).subscribe(User => {
      this.user = User;
      console.log(this.user)
    });
  }
}
