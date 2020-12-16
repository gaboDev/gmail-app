import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmailsService} from './services/emails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  areEmailsLoaded: boolean;
  constructor(private router: Router, private emailsService: EmailsService) {
    this.areEmailsLoaded = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.emailsService.getEmails()
        .then(() => this.router.navigateByUrl('inbox')
                               .then( () => this.areEmailsLoaded = true))
        .catch(error => alert(error));
    }, 1000);
  }

}
