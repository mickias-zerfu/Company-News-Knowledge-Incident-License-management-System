import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


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
  transactionTypeOptions: string[] = []
  statusOptions: string[] = []

  constructor() {
    this.fromDate = null;
    this.toDate = null;
    this.searchType = ''; // Default to 'Account Number' search
    this.transactionType = ''; // Initialize transaction type
    this.status = ''; // Initialize status
    this.accountNumber = ''; // Initialize account number
  }
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  campaignOne = {
    start: new Date(this.year, this.month, 1),
    end: new Date(this.today)
  };
  ngOnInit(): void {

    this.transactionTypeOptions.push("Transfer via RTGS", "ALL", "Transfer via ETH-SWICH", "Transfer to Own Account", "Bill Payments",)
    this.statusOptions.push("All", "Acknowledged", "Rejected", "Reconciled", "Reversal")
  }
  onSearchByChange() {
    // this.searchType ="Transaction Type";
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
