import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bw-process-service',
  templateUrl: './bw-process-service.component.html',
  styleUrls: ['./bw-process-service.component.css', '../radio.css','../btn.css']
})
export class BwProcessServiceComponent {
  basicbwProcessServiceList: { NO: string, checkListItem: string, Name: string, isSelected?: boolean }[] = [
    { "NO": "1", "checkListItem": "Web Gateway", "Name": "Web Gateway" },
    { "NO": "2", "checkListItem": "Reporter Process ", "Name": "Reporter Process " },
    { "NO": "3", "checkListItem": "Zemen Validation BOIS", "Name": "Zemen Validation BOIS" },
    { "NO": "4", "checkListItem": "Zemen sync BOIS", "Name": "Zemen sync BOIS" },
    { "NO": "5", "checkListItem": "Zemen FTBOIS", "Name": "Zemen FTBOIS" },
    { "NO": "6", "checkListItem": "XML BOIS", "Name": "XML BOIS" },
    { "NO": "7", "checkListItem": "Zemen BIBOIS", "Name": "Zemen BIBOIS" },
    { "NO": "8", "checkListItem": "Batch INBOIS", "Name": "Batch INBOIS" },
    { "NO": "9", "checkListItem": "CMS BOIS", "Name": "CMS BOIS" },
    { "NO": "10", "checkListItem": "Iflex ISOBOIS  ", "Name": "Iflex ISOBOIS  " },
    { "NO": "11", "checkListItem": "Channel manager", "Name": "Channel manager" },
    { "NO": "12", "checkListItem": "Channel Manager Controller", "Name": "Channel Manager Controller" },
    { "NO": "13", "checkListItem": "Integration manager", "Name": "Integration manager" },
    { "NO": "14", "checkListItem": "Web administration manager ", "Name": "Web administration manager " },
    { "NO": "15", "checkListItem": "XML gateway ", "Name": "XML gateway " },
    { "NO": "16", "checkListItem": "Email Notification Gateway", "Name": "Email Notification Gateway" },
    { "NO": "17", "checkListItem": "SMPP Device Manager", "Name": "SMPP Device Manager" },
    { "NO": "18", "checkListItem": "SMS cluster Server", "Name": "SMS cluster Server" },
    { "NO": "19", "checkListItem": "SMS connector", "Name": "SMS connector" },
    { "NO": "20", "checkListItem": "SMS inbound gateway", "Name": "SMS inbound gateway" },
    { "NO": "21", "checkListItem": "SMS outbound gateway ", "Name": "SMS outbound gateway " },
    { "NO": "22", "checkListItem": "USSD connector", "Name": "USSD connector" },
    { "NO": "23", "checkListItem": "USSD integrator for BWUSSD simulator", "Name": "USSD integrator for BWUSSD simulator" },
     { "NO": "24", "checkListItem": " USSD integrator for USSD Plugin", "Name": "USSD integrator for for USSD Plugin" }
  ]

bwProcessServicemodel: any;

@Output()
newItemEvent = new EventEmitter<string>();

constructor(
  private router: Router, private activatedRoute: ActivatedRoute) {
}

onFormSubmit(f: NgForm) {
  console.log(f.value);
}
}
