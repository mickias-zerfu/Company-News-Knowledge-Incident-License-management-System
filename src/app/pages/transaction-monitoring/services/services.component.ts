import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ServicesComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['No', 'gateway', 'status', 'date'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  No: number;
  gateway: string;
  status: string;
  date: any;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    No: 1,
    gateway: 'SMS',
    status: "Online",
    date:new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}),
    description: `Hydrogen is a chemical element with date H and atomic number 1. With a standard
        atomic s"tatus of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    No: 2,
    gateway: 'IB',
    status: "Online",
    date: new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}),
    description: `Helium is a chemical element with date He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    No: 3,
    gateway: 'MA',
    status: "Online",
    date: new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}),
    description: `Lithium is a chemical element with date Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
]
