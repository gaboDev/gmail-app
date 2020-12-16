import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteNames} from './utils/routing.utils';
import {InboxComponent} from './pages/inbox/inbox.component';

const routes: Routes = [{
  path: RouteNames.inbox,
  component: InboxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
