import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-boards',
  templateUrl: './contact-boards.component.html',
  styleUrls: ['./contact-boards.component.css']
})
export class ContactBoardsComponent {

  @Input() member: BoardMember;
}


interface BoardMember {
  name: string;
  title: string;
  image: string;
}
