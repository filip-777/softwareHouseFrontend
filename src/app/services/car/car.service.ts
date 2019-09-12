import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private username = 'user@user.com'; //FIXME with HttpInterceptor, hardcoded pass
  private password = 'pass123';


  constructor(private httpClient: HttpClient) {

  }

  save(car: Car) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.httpClient.post('http://localhost:9000/car/save', car, {headers}).toPromise();
  }

  fetchAll() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.httpClient.get('http://localhost:9000/car/fetchAll',{headers}).toPromise().then(response => response as Car[]);

  }
}
