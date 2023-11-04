import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-side',
  templateUrl: './contact-side.component.html',
  styleUrls: ['./contact-side.component.css']
})
export class ContactSideComponent implements OnInit {
boardMembers: BoardMember[] = [
    {
      name: 'Yekoye Mihret',
      title: 'Senior Officer',
      image: ' assets/yekoye.png'
    },
    {
      name: 'Yekoye Mihret',
      title: 'Senior Officer',
      image: '  assets/yekoye.png'
    },
    {
      name: 'Yekoye Mihret',
      title: 'Senior Officer',
      image: '  assets/yekoye.png'
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
