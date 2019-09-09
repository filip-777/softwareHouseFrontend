import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { LoginFormComponent } from './components/user/login-form/login-form.component';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    LoginFormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
