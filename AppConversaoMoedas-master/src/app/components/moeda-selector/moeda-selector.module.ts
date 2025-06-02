import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoedaSelectorComponent } from 'src/app/components/moeda-selector/moeda-selector.component';

@NgModule({
  declarations: [MoedaSelectorComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [MoedaSelectorComponent],
})
export class MoedaSelectorModule {}