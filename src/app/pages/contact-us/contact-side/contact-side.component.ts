import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-side',
  templateUrl: './contact-side.component.html',
  styleUrls: ['./contact-side.component.css']
})
export class ContactSideComponent implements OnInit {
boardMembers: BoardMember[] = [
    {
      name: 'Yonathan Abebe',
      title: 'Senior Officer',
      image: ' assets/user_avatar.png'
    },
    {
      name: 'Yekoye Mihret',
      title: 'Senior Officer',
      image: 'assets/yekoye.png'
    },
    {
      name: 'Tewodros Nigussie',
      title: 'Officer',
      image: '  assets/tedy.jpg'
    },
    {
      name: 'Mikiyas Zerfu',
      title: 'Officer',
      image: '  assets/user_avatar.png'
    },
    {
      name: 'Birhan Addisu',
      title: 'Officer',
      image: '  assets/brhan.jpg'
    },
    {
      name: 'Fasik Desalegn',
      title: 'Officer',
      image: '  assets/user_avatar.png'
    },
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
