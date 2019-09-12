export class Car {
  id: number;
  model: string;
  mark: string;
  color: string;
  bodyType: string;
  price: number;
  yearOfProduction: number;

  constructor(model: string, mark: string, color: string, bodyType: string, price: number, yearOfProduction: number) {
    this.model = model;
    this.mark = mark;
    this.color = color;
    this.bodyType = bodyType;
    this.price = price;
    this.yearOfProduction = yearOfProduction;
  }


}
