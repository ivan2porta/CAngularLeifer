import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  status:string | number = 2;
  
 car:CarModel = {
  brand: 'Ford',
  model: 'Focus',
  year: 2021
 }

 listCars:Array<CarModel> = [
  {
    brand:'Porche',
    model:'Carrera',
    year:2022
  },
  {
    brand:'Renault',
    model:'Clio',
    year: 2001
  }
 ]
}

interface CarModel {
  brand:string;
  model:string;
  year?:number;
}
