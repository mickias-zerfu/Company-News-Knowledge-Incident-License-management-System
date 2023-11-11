import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bw-process-service',
  templateUrl: './bw-process-service.component.html',
  styleUrls: [
    './bw-process-service.component.css',
    '../radio.css',
    '../btn.css',
  ],
})
export class BwProcessServiceComponent implements OnInit {
  basicbwProcessServiceList: {
    NO: string;
    checkListItem: string;
    Name: string;
    isSelected?: boolean;
  }[] = [
    { NO: '1', checkListItem: 'Web Gateway', Name: 'Web Gateway' },
    { NO: '2', checkListItem: 'Reporter Process ', Name: 'Reporter Process ' },

    {
      NO: '3',
      checkListItem: 'Zemen Validation BOIS',
      Name: 'Zemen Validation BOIS',
    },
    { NO: '4', checkListItem: 'Zemen sync BOIS', Name: 'Zemen sync BOIS' },
    { NO: '5', checkListItem: 'Zemen FTBOIS', Name: 'Zemen FTBOIS' },
    { NO: '6', checkListItem: 'XML BOIS', Name: 'XML BOIS' },
    { NO: '7', checkListItem: 'Zemen BIBOIS', Name: 'Zemen BIBOIS' },
    { NO: '8', checkListItem: 'Batch INBOIS', Name: 'Batch INBOIS' },
    { NO: '9', checkListItem: 'CMS BOIS', Name: 'CMS BOIS' },
    { NO: '10', checkListItem: 'Iflex ISOBOIS  ', Name: 'Iflex ISOBOIS  ' },

    { NO: '11', checkListItem: 'Channel manager', Name: 'Channel manager' },
    {
      NO: '12',
      checkListItem: 'Channel Manager Controller',
      Name: 'Channel Manager Controller',
    },
    {
      NO: '13',
      checkListItem: 'Integration manager',
      Name: 'Integration manager',
    },
    {
      NO: '14',
      checkListItem: 'Web administration manager ',
      Name: 'Web administration manager ',
    },

    { NO: '15', checkListItem: 'XML gateway ', Name: 'XML gateway ' },

    {
      NO: '16',
      checkListItem: 'Email Notification Gateway',
      Name: 'Email Notification Gateway',
    },
    {
      NO: '17',
      checkListItem: 'SMPP Device Manager',
      Name: 'SMPP Device Manager',
    },
    {
      NO: '18',
      checkListItem: 'SMS cluster Server',
      Name: 'SMS cluster Server',
    },
    { NO: '19', checkListItem: 'SMS connector', Name: 'SMS connector' },
    {
      NO: '20',
      checkListItem: 'SMS inbound gateway',
      Name: 'SMS inbound gateway',
    },
    {
      NO: '21',
      checkListItem: 'SMS outbound gateway ',
      Name: 'SMS outbound gateway ',
    },

    { NO: '22', checkListItem: 'USSD connector', Name: 'USSD connector' },
    {
      NO: '23',
      checkListItem: 'USSD integrator for BWUSSD simulator',
      Name: 'USSD integrator for BWUSSD simulator',
    },
    {
      NO: '24',
      checkListItem: ' USSD integrator for USSD Plugin',
      Name: 'USSD integrator for for USSD Plugin',
    },

    {
      NO: '25',
      checkListItem: ' Fund transfer and Balance update',
      Name: 'USSD integrator for for USSD Plugin',
    },

    {
      NO: '26',
      checkListItem: ' Ethswiech Lookup and Transfer',
      Name: 'USSD integrator for for USSD Plugin',
    },

    {
      NO: '27',
      checkListItem: ' Ethswitch transfer limit',
      Name: 'USSD integrator for for USSD Plugin',
    },

    {
      NO: '28',
      checkListItem: ' Exchange rate',
      Name: 'USSD integrator for for USSD Plugin',
    },
  ];

  // bwProcessServicemodel: any;

  @Output()
  newItemEvent = new EventEmitter<string>();

  sections: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // const component = new BwProcessServiceComponent();
    this.sections = this.displayBySection();
  }

  onFormSubmit(f: NgForm) {
    console.log(f.value);
  }

  displayBySection(): {
    section: string;
    items: {
      NO: string;
      checkListItem: string;
      Name: string;
      isSelected?: boolean;
    }[];
  }[] {
    const sections: {
      section: string;
      items: {
        NO: string;
        checkListItem: string;
        Name: string;
        isSelected?: boolean;
      }[];
    }[] = [];

    // Group elements based on specific criteria
    const section1Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 1
      // For example, items with NO less than 5
      return parseInt(item.NO) < 3;
    });

    const section2Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 2
      // For example, items with NO between 5 and 10
      const no = parseInt(item.NO);
      return no >= 3 && no <= 10;
    });

    const section3Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 2
      // For example, items with NO between 5 and 10
      const no = parseInt(item.NO);
      return no > 10 && no <= 14;
    });

    const section4Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 2
      // For example, items with NO between 5 and 10
      const no = parseInt(item.NO);
      return no > 14 && no <= 15;
    });

    const section5Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 2
      // For example, items with NO between 5 and 10
      const no = parseInt(item.NO);
      return no > 15 && no <= 21;
    });

    const section6Items = this.basicbwProcessServiceList.filter((item) => {
      // Define your criteria for section 2
      // For example, items with NO between 5 and 10
      const no = parseInt(item.NO);
      return no > 21 && no <= 24;
    });

    // Add sections to the result array
    sections.push({ section: 'Web Channels', items: section1Items });
    sections.push({ section: 'BOISes', items: section2Items });
    sections.push({ section: 'Channel Manager', items: section3Items });
    sections.push({ section: 'XML Channels', items: section4Items });
    sections.push({ section: 'Mobile Channels', items: section5Items });
    sections.push({ section: 'USSD Channels', items: section6Items });
    // sections.push({ section: 'USSD Channels', items: section2Items });

    return sections;
  }
}

// }
