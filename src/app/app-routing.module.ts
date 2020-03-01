import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AppmainComponent } from './components/appmain/appmain.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

const routes: Routes = [{
  path: '',
  component: AppmainComponent,
  canActivate: [AuthGuardService],
  children: [
    {
      path: '',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
    }
  ]},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
