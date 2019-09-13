import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CarFormComponent} from './components/car/car-form/car-form.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { FooterComponent } from './components/footer/footer.component';
import {BasicAuthHttpInterceptorService} from './services/basicAuthHttpInterceptor/basic-auth-http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    CarListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
