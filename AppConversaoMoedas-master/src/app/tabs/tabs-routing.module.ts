import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'conversao',
        loadChildren: () => import('../conversao/conversao.module').then(m => m.ConversaoPageModule)
      },
      {
        path: 'historico',
        loadChildren: () => import('../historico/historico.module').then(m => m.HistoricoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/conversao',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: () => '/tabs/conversao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
