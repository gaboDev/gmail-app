import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  color: string;

  @Input()
  isActive: boolean;

  @Input()
  withBackground: boolean;

  @Output()
  clickFired: EventEmitter<any>;

  constructor() {
    this.clickFired = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  getColor(): string {
    return this.isActive ? this.color : '#787878';
  }

  getClass(): string {
    return this.isActive ? 'hovered rounded-button' : 'rounded-button';
  }

  handleClick(): void{
    if (!this.isActive) { return; }
    this.clickFired.emit();
  }

  hasBackground(): string {
    return this.withBackground ? 'true' : 'false';
  }

}
