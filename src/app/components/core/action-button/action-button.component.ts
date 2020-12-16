import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Output()
  clickFired: EventEmitter<any>;

  constructor() {
    this.clickFired = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.clickFired.emit();
  }

}
