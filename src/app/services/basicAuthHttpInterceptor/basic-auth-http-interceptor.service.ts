import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicAuth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicAuth')
        }
      });
    }
    return next.handle(req);
  }


}
