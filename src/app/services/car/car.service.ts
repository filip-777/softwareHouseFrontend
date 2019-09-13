import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../../models/car/car';
import {reject} from 'q';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = `${environment.api.url}/car`;

  constructor(private httpClient: HttpClient) {

  }

  public save(car: Car) {
    return this.httpClient.post(this.url + '/save', car).toPromise();
  }

  public fetchAll() {
    return this.httpClient.get(this.url + '/fetchAll').toPromise().then(response => response as Car[]);
  }

  public delete(car: Car) {
    return this.httpClient.delete(this.url + '/delete/' + car.id).toPromise();
  }
}
