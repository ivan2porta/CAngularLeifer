import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', // http://localhost:4200/home
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'auth', // http://localhost:4200/home
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
