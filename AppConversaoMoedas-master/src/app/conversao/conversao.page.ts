import { Component, OnInit } from '@angular/core';
import { ConversorMoedasService } from '../services/conversor-moedas.service';
import { MoedaSelectorComponent } from '../components/moeda-selector/moeda-selector.component';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.page.html',
  styleUrls: ['./conversao.page.scss'],
  standalone: false,
})
export class ConversaoPage implements OnInit {

  valor: number | null = null;
  moeda1: string = "";
  moeda2: string = "";

  loading: boolean = false;
  resultado: string | null = null;

  constructor(
    public conversorMoedasService: ConversorMoedasService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.conversorMoedasService.fetchAndCacheRatesFromUSD();
  }

  inverterMoedas() {
    let oldMoeda1 = this.moeda1;
    this.moeda1 = this.moeda2;
    this.moeda2 = oldMoeda1;
  }

  converter() {
    if (this.valor && this.moeda1 && this.moeda2) {
      this.loading = true;
      this.resultado = "Convertendo...";

      this.conversorMoedasService.convert(this.valor, this.moeda1, this.moeda2)
        .then((result) => {
          this.resultado = result.toLocaleString();

          console.log('Salvando no histórico...');

          // salva no histórico
          this.conversorMoedasService.addToHistory({
            data: new Date().toISOString(),
            moedaOrigem: this.moeda1,
            moedaDestino: this.moeda2,
            valor: this.valor!,
            resultado: result,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => this.loading = false);
    }
  }

  async abrirModalMoedas(variavel: 'moeda1' | 'moeda2') {
    const modal = await this.modalCtrl.create({
      component: MoedaSelectorComponent,
      componentProps: {
        moedas: this.conversorMoedasService.currencies,
      },
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data) {
      if (variavel === 'moeda1')
        this.moeda1 = data;
      else
        this.moeda2 = data;
    }
  }

}
