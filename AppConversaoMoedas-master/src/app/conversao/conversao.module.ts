import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversaoPageRoutingModule } from './conversao-routing.module';

import { ConversaoPage } from './conversao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversaoPageRoutingModule
  ],
  declarations: [ConversaoPage]
})
export class ConversaoPageModule {}
