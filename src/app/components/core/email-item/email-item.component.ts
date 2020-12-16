import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Email} from '../../../interfaces/Email';
import {formatDateToHour, Formats} from '../../../utils/date.utils';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent implements OnInit {

  @Input()
  email: Email;

  @Output()
  checkedEvent: EventEmitter<boolean>;

  constructor() {
    this.checkedEvent = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  calculateBodyPreview(): string{
    return this.email.body.substr(0, 50);
  }

  formatDate(): string {
    return formatDateToHour(this.email.date, Formats.hour);
  }

  handleSelectionChange({checked}): void {
    this.checkedEvent.emit(checked);
  }

}
