import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarFormComponent} from './components/car/car-form/car-form.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {CarListComponent} from './components/car/car-list/car-list.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'car-form',
    component: CarFormComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'car-list',
    component: CarListComponent, canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
