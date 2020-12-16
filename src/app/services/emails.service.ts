import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Email} from '../interfaces/Email';
import {mapToEmailsArray} from './emails.service.mapper';
import {Tag} from '../interfaces/Tag';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private emails: Array<Email>;
  private emailTags: Array<Tag>;

  constructor(private httpClient: HttpClient) {
    this.emailTags = [
      {
        tag: '',
        icon: 'inbox',
        label: 'Received',
        isActive: true,
        count: '0'
      },
      {
        tag: 'work',
        icon: 'computer',
        label: 'Work',
        isActive: false,
        count: '0'
      },
      {
        tag: 'travel',
        icon: 'airplanemode_active',
        label: 'Travel',
        isActive: false,
        count: '0'
      }
    ];
  }

  private searchEmailIndexById(emailId: number): number {
    return this.emails.findIndex(currentEmail => currentEmail.id === emailId);
  }

  getEmails(): Promise< Array<Email> > {
    return new Promise<Array<Email>>((resolve, reject) => {
      if (this.emails?.length){
        resolve(this.emails);
        return;
      }
      this.httpClient.get('./assets/emails.json')
        .subscribe(
          response => {
            this.emails = mapToEmailsArray(response);
            resolve(this.emails);
          },
            err => reject(err)
        );
    });
  }

  getTags(): Array<Tag> {
    /**ToDo:
     *  Retrieve tags dynamically
     */
    return this.emailTags;
  }

  setEmailChecked({id}: Email, isChecked): void {
    const index = this.searchEmailIndexById(id);
    this.emails[index].checked = isChecked;
  }

  setAllEmailsChecked(areChecked): void {
    this.emails.forEach(currentEmail => currentEmail.checked = areChecked);
  }

  getCheckedEmails(): Array<Email> {
    if (!this.emails) { return []; }
    return this.emails.filter(currentEmail => currentEmail.checked);
 }

 deleteEmails({id}: Email): void {
   const index = this.searchEmailIndexById(id);
   this.emails.splice(index, 1);
 }

}
