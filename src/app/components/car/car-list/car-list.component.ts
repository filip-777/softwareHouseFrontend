import {Component, OnInit} from '@angular/core';
import {Car} from '../../../models/car/car';
import {CarService} from '../../../services/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.carService.fetchAll().then(response => this.cars = response);
  }

}


