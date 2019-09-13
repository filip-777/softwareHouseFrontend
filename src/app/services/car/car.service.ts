import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {

  }

  save(car: Car) {
    return this.httpClient.post('http://localhost:9000/car/save', car).toPromise();
  }

  fetchAll() {
    return this.httpClient.get('http://localhost:9000/car/fetchAll').toPromise().then(response => response as Car[]);

  }
}
