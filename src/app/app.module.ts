import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CarFormComponent} from './components/car/car-form/car-form.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
