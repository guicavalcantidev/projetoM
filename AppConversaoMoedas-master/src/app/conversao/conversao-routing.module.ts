import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversaoPage } from './conversao.page';

const routes: Routes = [
  {
    path: '',
    component: ConversaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversaoPageRoutingModule {}
