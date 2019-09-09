import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './components/user/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
