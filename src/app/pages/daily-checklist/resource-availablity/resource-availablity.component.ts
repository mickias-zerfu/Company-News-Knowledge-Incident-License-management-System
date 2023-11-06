import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-availablity',
  templateUrl: './resource-availablity.component.html',
  styleUrls: ['./resource-availablity.component.css','../radio.css','../btn.css']
})
export class ResourceAvailablityComponent {

constructor(
  private router: Router, private activatedRoute: ActivatedRoute) {
}

onFormSubmit(f: NgForm) {
  console.log(f.value);
}
}
