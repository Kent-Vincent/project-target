import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavLayoutComponent } from './layouts/top-nav-layout/top-nav-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/top-nav-layout/top-nav-layout.module').then(m => m.TopNavLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
