import { RouterModule, Routes } from '@angular/router';

import { DetailRoutingModule } from './views/detail/detail-routing.module';
import { HomeRoutingModule } from './views/home/home-routing.module';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    NzButtonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
