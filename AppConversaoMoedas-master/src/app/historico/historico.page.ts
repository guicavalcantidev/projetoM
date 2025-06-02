import { Component, OnInit } from '@angular/core';
import { ConversaoHistorico, ConversorMoedasService } from '../services/conversor-moedas.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: false,
})
export class HistoricoPage {

  historico: ConversaoHistorico[] = [];

  constructor(private conversorMoedasService: ConversorMoedasService) { }

  ionViewWillEnter(): void {
    console.log('Obtendo histórico para exibir...');
    this.historico = this.conversorMoedasService.getHistory();
  }

}
