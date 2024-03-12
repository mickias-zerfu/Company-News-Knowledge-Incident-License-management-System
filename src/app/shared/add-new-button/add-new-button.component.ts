import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-button',
  templateUrl: './add-new-button.component.html',
  styleUrls: ['./add-new-button.component.css']
})
export class AddNewButtonComponent {

  @Input() buttonText: string;
}
