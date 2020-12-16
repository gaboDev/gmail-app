import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SplashScreenComponent } from './components/core/splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InboxComponent } from './pages/inbox/inbox.component';
import { HeaderComponent } from './components/sections/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { CircleButtonComponent } from './components/core/circle-button/circle-button.component';
import { GmailLogoComponent } from './components/core/gmail-logo/gmail-logo.component';
import { AccountAvatarComponent } from './components/core/account-avatar/account-avatar.component';
import { SearchBarComponent } from './components/core/search-bar/search-bar.component';
import { EmailTagComponent } from './components/core/email-tag/email-tag.component';
import { TagsComponent } from './components/sections/tags/tags.component';
import { ActionButtonComponent } from './components/core/action-button/action-button.component';
import { EmailItemComponent } from './components/core/email-item/email-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    InboxComponent,
    HeaderComponent,
    CircleButtonComponent,
    GmailLogoComponent,
    AccountAvatarComponent,
    SearchBarComponent,
    EmailTagComponent,
    TagsComponent,
    ActionButtonComponent,
    EmailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
