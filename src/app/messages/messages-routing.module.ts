import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';

const routes: Routes = [
  {
    path: '',
    component: MessageListComponent,
  },
  {
    path: 'stepper',
    component: MessageNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
