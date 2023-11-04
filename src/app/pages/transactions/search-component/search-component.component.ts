import { Component } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {

  fromDate: Date | null;
  toDate: Date | null;
  searchType: string;
  transactionType: string;
  status: string;
  accountNumber: string;
  searchByOptions: string[] = [
    "Transaction Type",
    "Account Number"
  ];
  transactionTypeOptions:[]=[]
  statusOptions:[]=[]

  constructor() {
    this.fromDate = null;
    this.toDate = null;
    this.searchType = 'accountNumber'; // Default to 'Account Number' search
    this.transactionType = ''; // Initialize transaction type
    this.status = ''; // Initialize status
    this.accountNumber = ''; // Initialize account number
  }
  ngOnInit(): void {


  }
  onSearchByChange() {
    this.transactionType =     "Transaction Type";
  }
  onSearchClicked() {
    console.log('Search parameters:', {
      fromDate: this.fromDate,
      toDate: this.toDate,
      searchType: this.searchType,
      transactionType: this.transactionType,
      status: this.status,
      accountNumber: this.accountNumber
    });
  }
}
