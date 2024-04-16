import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userManagementStatus: string;
  users: any[]; // Array to hold mock user data
  displayedColumns: string[] = ['name', 'email', 'role', 'action'];
  dataSource: MatTableDataSource<any>;

  constructor() {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    // Initialize mock user data
    this.users = [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      { name: 'Alice Johnson', email: 'alice@example.com', role: 'User' }
    ];

    // Set user management status
    this.userManagementStatus = 'Active';

    // Set data source for MatTable
    this.dataSource.data = this.users;
  }

  // Method to add a new user (mock action)
  addNewUser(): void {
    // Mock action to add a new user
    console.log('Adding a new user...');
  }

  // Method to delete a user (mock action)
  deleteUser(user: any): void {
    // Mock action to delete a user
    console.log(`Deleting user: ${user.name}`);
    // Remove the user from the array
    this.users = this.users.filter(u => u !== user);
    this.dataSource.data = this.users; // Update data source for MatTable
  }
}
