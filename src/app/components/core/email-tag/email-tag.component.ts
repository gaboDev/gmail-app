import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-tag',
  templateUrl: './email-tag.component.html',
  styleUrls: ['./email-tag.component.scss']
})
export class EmailTagComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  label: string;

  @Input()
  count: string;

  @Input()
  isActive: boolean;

  states: any;

  constructor() {
    this.states = {
      deactivated: 'tag-body',
      activated: 'active tag-body'
    };
  }

  ngOnInit(): void {
    this.count = this.count ?? '-';
  }

  getStateClass(): string {
    return this.isActive ? this.states.activated : this.states.deactivated;
  }

}
