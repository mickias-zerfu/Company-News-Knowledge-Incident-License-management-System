import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-side',
  templateUrl: './contact-side.component.html',
  styleUrls: ['./contact-side.component.css']
})
export class ContactSideComponent implements OnInit {
boardMembers: BoardMember[] = [
    {
      name: 'Metropolitan-Jeronymos',
      title: 'Chairperson',
      image: ' assets/images/boards/Metropolitan-Jeronymos-2-edit.jpg'
    },
    {
      name: 'Bishop-Silvester-Kisitu',
      title: 'Vice Chair',
      image: ' assets/images/boards/Bishop-Silvester-Kisitu-e1681559898145.jpg'
    },
    {
      name: 'Bishop-Kabuye',
      title: 'Vice Chair',
      image: ' assets/images/boards/Bishop-Kabuye.jpg'
    },
    // Add more board members as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}


interface BoardMember {
  name: string;
  title: string;
  image: string;
}
