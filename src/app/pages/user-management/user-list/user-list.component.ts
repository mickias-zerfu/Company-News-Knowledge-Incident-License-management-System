import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/auth/admin.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  statuses: any[] = ['info'];
  // users:any[]=[]
  data: any[] = [];
  searchItem = {
    item: '',
  };
  max: Date = new Date();
  dateRange:any = {
    start:'',
    end:''
  }
  checkedArray = []
  checkAll: Boolean = false
  constructor(private adminservice: AdminService, private toastrService: ToastService) {
    // this.max = this.dateService.today()
  }
  ngOnInit() {
    this.checkedArray = []
    this.getUsers('1', '');
  }
  getUsers = async (pageNo: any, searchItem: any, dateRange?: any) => {
    const params = {
      pageNo: pageNo,
      size: '8',
      searchItem: searchItem,
      dateRange: dateRange ? JSON.stringify(dateRange) : ''
    };

    this.adminservice.getAdminList(params).subscribe((res: any) => {
      this.data = res;
      // console.info(this.data)
    }, error =>
      this.toastrService.showError('Error', 'Some Error from server when fetching the user list', 2000)
    );
  }

  onDeleteConfirm(event:any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  InactiveUser(id: string, indexis: any): boolean {
    if (confirm('Are you sure you want to Change status?')) {
      // console.log(id);
      this.adminservice.inactiveSubadmin(id).subscribe(
        (response: any) => {
          location.reload()
          this.toastrService.showSuccess('success', response['message']);
        },
        (error) => {
          // console.error(error);
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  }

  ActiveUser(id: string, indexis: any): boolean {
    if (confirm('Are you sure you want to Change status?')) {
      // console.log(id);
      this.adminservice.activeSubadmin(id).subscribe(
        (response: any) => {
          location.reload()
          this.toastrService.showSuccess('success', response['message']);
        },
        (error) => {
          // console.error(error);
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  }

  deleteUser(id: string, indexis: any): boolean {
    if (confirm('Are you sure you want to Delete user?')) {
      // console.log(id);
      this.adminservice.deleteSubAdmin(id).subscribe(
        (response: any) => {
          this.toastrService.showSuccess('success', response['message']);
          location.reload()
        },
        (error) => {
          // console.error(error);
          this.toastrService.showError('danger', 'There was an error please try after some time!!');
          // Handle error
        }
      );
    } else {
      return false;
    }
    return true;
  }

  pageChanged(event:any) {
    this.getUsers(event, '')
  }
  searchEvent(searchItem:any) {
    this.getUsers('1', searchItem);
  };


  dateRangeChange() {
    if(!this.dateRange.start || !this.dateRange.end){
      this.toastrService.showError('Error', 'Select a date range');
      return
    }
    if(this.dateRange.start >= this.dateRange.end){
      this.toastrService.showError('Error', 'End date should be greater then start date');
      return
    }
    this.getUsers('1', '', this.dateRange);
  }

  reset() {
    this.dateRange = ''
    this.searchItem = { item: '' }
    this.ngOnInit()
  }


  checkChange() {
    this.checkedArray = []
    this.data.forEach((element: any) => {
      if (element.isChecked) {
        // console.log(element)
        // this.checkedArray.push(element._id)
        // console.log(this.checkedArray)
      }
      else {
        // console.log('in else')
        // var index = this.checkedArray.indexOf(element._id);
        // this.checkedArray.splice(index, 1);
      }
    })
    this.checkedArray = this.checkedArray.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) == index;
    });
    if (this.checkedArray.length === this.data.length) {
      this.checkAll = true
    }
    else {
      this.checkAll = false
    }
    // console.log(this.checkedArray)
  }

  checkAllChange() {
    if (this.checkAll) {
      this.data.forEach((element:any) => {
        element.isChecked = true
        // this.checkedArray.push(element['_id'])
      })
    }
    else {
      this.data.forEach((element:any) => {
        element.isChecked = false
      })
      this.checkedArray = []
    }
  }

  statusChange(status:any) {
    if (confirm('Are you sure?')) {
      // console.log(this.checkedArray)
      const newformData = new FormData();
      newformData.append('idArray', JSON.stringify(this.checkedArray))
      newformData.append('status', status)
      this.adminservice.multiStatusChange(newformData).subscribe((res:any) => {
        // console.log(res)
        if (res['status'] != -1) {
          this.checkAll = false
          this.ngOnInit()
          this.toastrService.showSuccess('success', res['message']);
        } else {
          this.checkAll = false
          this.ngOnInit()
          this.toastrService.showSuccess('success', res['message']);
        }
      })

      return true;
    }
    else { return false }
  }

  multiDelete() {
    if (confirm('Are you sure?')) {
      const newformData = new FormData();
      newformData.append('idArray', JSON.stringify(this.checkedArray))
      this.adminservice.multiDelete(newformData).subscribe((res:any) => {
        if (res['status'] != -1) {
          this.checkAll = false
          this.ngOnInit()
          this.toastrService.showSuccess('success', res['message']);
        } else {
          this.checkAll = false
          this.ngOnInit()
          this.toastrService.showSuccess('success', res['message']);
        }
      })
      return true;
    }
    else { return false }
  }
}

