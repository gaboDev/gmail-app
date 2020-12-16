import { Component, OnInit } from '@angular/core';
import {EmailsService} from '../../services/emails.service';
import {Email} from '../../interfaces/Email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  emails: Array<Email>;
  actionsButtons: Array<any>;
  actionsButtonsAreActive: boolean;

  constructor(private emailService: EmailsService) {
    this.emails = [];
    this.actionsButtonsAreActive = false;
    this.actionsButtons = [
      {
        icon: 'delete',
        color: '#9a524d',
        action: () => this.deleteCheckedEmails()
      }
    ];
  }

  ngOnInit(): void {
    this.emailService.getEmails()
      .then(emails => this.emails = emails)
      .catch();
  }

  handleSelectAllChange({checked}): void {
    this.actionsButtonsAreActive = checked;
    this.emailService.setAllEmailsChecked(checked);
  }

  handleEmailChecked(isChecked, email: Email): void {
    this.emailService.setEmailChecked(email, isChecked);
    this.actionsButtonsAreActive = this.getSelectedEmailsCount() > 0;
  }

  getSelectedEmailsCount(): number {
    const checkedEmails = this.emailService.getCheckedEmails();
    return checkedEmails?.length;
  }

  getEmailsCount(): number {
    return this.emails.length;
  }

  deleteCheckedEmails(): void {
    const checkedEmails = this.emailService.getCheckedEmails();
    checkedEmails.forEach(currentEmail => this.emailService.deleteEmails(currentEmail));
  }

  areThereEmails(): boolean {
    return this.emails.length > 0;
  }

}
