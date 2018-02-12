import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'wealth',
    loadChildren: 'app/modules/wealth/wealth.module#WealthModule',
  },
  {
    path: 'life',
    loadChildren: 'app/modules/life/life.module#LifeModule',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
