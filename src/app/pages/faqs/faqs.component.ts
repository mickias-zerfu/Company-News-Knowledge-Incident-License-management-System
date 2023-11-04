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
      question: "1: How can I support the CONSTANTINE AFRICAN FOUNDATION?",
      answer: "You can contribute to the foundation by visiting their website and exploring their       donation options.Every contribution makes a difference in transforming lives in Africa.      2. What are the key areas of focus for the foundation?"
    },
    {
      question: '2: What are the key areas of focus for the foundation?',
      answer: "The foundation primarily focuses on the foundation willing established Especially in the field of handicrafts such as carpentry and other crafts, education, healthcare, and  economic empowerment.These pillars form the foundation's core initiatives and drive  their efforts towards positive change."
    },
    {
      question: "3. How can I stay updated on the foundation's work?",
      answer: 'You can stay informed about the CONSTANTINE AFRICAN FOUNDATION work by subscribing to their newsletter and following their social media channels or Mobile   App.They regularly share updates and success stories from their projects.'
    },
    {
      question: " 4. Can I volunteer with the foundation?",
      answer: "Yes, the foundation welcomes volunteers who share their vision and passion for making       a difference in Africa.You can reach out to them through their website to inquire about       volunteer opportunities."
    },
    {
      question: "5. Are there any success stories from the foundation's initiatives?",
      answer: "Yes, the CONSTANTINE AFRICAN FOUNDATION has numerous success stories that  showcase the impact of their initiatives. These stories highlight the transformed lives       of individuals and communities, inspiring others to believe in the power of change."
    }
  ];

  expandedIndex: number | null = 0;

  toggleAccordion(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  ngOnInit(): void {
  }
}
