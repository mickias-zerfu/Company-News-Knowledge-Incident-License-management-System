import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {


  constructor() { }
  faqs = [
    {
      question: "1: How can I support ",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum exercitationem alias fugit ut aperiam neque laboriosam possimus vitae? Aliquam mollitia atque adipisci esse, officiis dolore voluptatem voluptates recusandae ab?"
    },
    {
      question: "1: How can I support ",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum exercitationem alias fugit ut aperiam neque laboriosam possimus vitae? Aliquam mollitia atque adipisci esse, officiis dolore voluptatem voluptates recusandae ab?"
    },
    {
      question: "1: How can I support ",
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum exercitationem alias fugit ut aperiam neque laboriosam possimus vitae? Aliquam mollitia atque adipisci esse, officiis dolore voluptatem voluptates recusandae ab?'
    },
    {
      question: "1: How can I support ",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum exercitationem alias fugit ut aperiam neque laboriosam possimus vitae? Aliquam mollitia atque adipisci esse, officiis dolore voluptatem voluptates recusandae ab?."
    },
    {
      question: "1: How can I support ",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum exercitationem alias fugit ut aperiam neque laboriosam possimus vitae? Aliquam mollitia atque adipisci esse, officiis dolore voluptatem voluptates recusandae ab?"
    }
  ];

  expandedIndex: number | null = 0;

  toggleAccordion(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  ngOnInit(): void {
  }
}
