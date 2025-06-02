import { Component, Input, ViewChild } from '@angular/core';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonList, IonItem, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-moeda-selector',
  templateUrl: './moeda-selector.component.html',
  standalone: false,
})
export class MoedaSelectorComponent {
  @Input() moedas: any[] = [];

  searchTerm = '';
  moedasFiltradas: any[] = [];
  @ViewChild('searchBar', { static: false }) searchBar?: IonSearchbar;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moedasFiltradas = this.moedas;
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.searchBar?.setFocus();
    }, 300);
  }

  filtrarMoedas() {
    const termo = this.searchTerm.toLowerCase();
    this.moedasFiltradas = this.moedas.filter(moeda =>
      moeda.currencyCode.toLowerCase().includes(termo) ||
      moeda.currencyName.toLowerCase().includes(termo)
    );
  }

  selecionar(moeda: string) {
    this.modalCtrl.dismiss(moeda);
  }

  cancelar() {
    this.modalCtrl.dismiss(null);
  }
  
}
