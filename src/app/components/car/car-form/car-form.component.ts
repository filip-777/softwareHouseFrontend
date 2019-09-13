import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../services/car/car.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../../models/car/car';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  noData = 'no data';

  basicForm: FormGroup;
  car: Car;

  constructor(private carService: CarService,
              private fb: FormBuilder,
              private router: Router) {

  }

  ngOnInit() {
    this.basicForm = this.fb.group({
      mark: [null, Validators.required],
      model: [null, Validators.required],
      yearOfProduction: [null, Validators.required],
      price: [null, Validators.required]
    });
  }

  save(mark, model, color, bodyType, yearOfProduction, price) {
    this.car = new Car(model, mark, color, bodyType, price, Math.floor(yearOfProduction));
    this.carService.save(this.car).then(response =>
      this.router.navigate(['/car-list']));

  }

}
